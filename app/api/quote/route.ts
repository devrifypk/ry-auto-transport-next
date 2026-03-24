import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { siteConfig } from '../../config';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { 
      firstName, lastName, phone, email, 
      vehicles, 
      pickup, delivery, date, notes 
    } = data;

    // Build the transporter
    // For Vercel deployment, you must set these environment variables in your Vercel project settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to the business owner
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER || siteConfig.fromEmail,
      to: process.env.NOTIFICATION_EMAIL || siteConfig.notificationEmail,
      subject: `New Quote Request: ${pickup} to ${delivery}`,
      text: `
        New Quote Request from Website:
        
        Customer Information:
        ---------------------
        Name: ${firstName} ${lastName}
        Phone: ${phone}
        Email: ${email}
        
        Vehicle Information:
        --------------------
${vehicles.map((v: any, i: number) => `        ${i + 1}. ${v.year} ${v.make} ${v.model} (Running: ${v.running === 'yes' ? 'Yes' : 'No'})`).join('\n')}
        
        Route & Timing:
        ---------------
        Pickup: ${pickup}
        Delivery: ${delivery}
        First Available Date: ${date}
        
        Additional Notes:
        -----------------
        ${notes || 'None provided'}
      `,
      html: `
        <div style="font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ecffe2; padding: 30px; border-radius: 12px;">
          <div style="background-color: #045016; padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.02em;">New Quote Request</h1>
            <p style="color: #90d78d; margin: 8px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">from ${siteConfig.companyName}</p>
          </div>
          <div style="background-color: #ffffff; padding: 40px; border-radius: 0 0 12px 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
            
            <h3 style="color: #045016; border-bottom: 2px solid #ecffe2; padding-bottom: 10px; margin-top: 0; font-size: 18px;">Customer Details</h3>
            <table style="width: 100%; margin-bottom: 25px; font-size: 15px; line-height: 1.6;">
              <tr><td style="padding: 6px 0; width: 120px; color: #40493e;"><strong>Name:</strong></td><td style="font-weight: 600; color: #002200;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding: 6px 0; color: #40493e;"><strong>Phone:</strong></td><td style="font-weight: 600; color: #002200;">${phone}</td></tr>
              <tr><td style="padding: 6px 0; color: #40493e;"><strong>Email:</strong></td><td style="font-weight: 600; color: #002200;">${email}</td></tr>
            </table>
            
            <h3 style="color: #045016; border-bottom: 2px solid #ecffe2; padding-bottom: 10px; font-size: 18px;">Vehicles to Transport</h3>
            <ul style="padding-left: 0; list-style-type: none; margin-bottom: 25px;">
              ${vehicles.map((v: any, i: number) => `
                <li style="background-color: #f8fbf7; border-left: 4px solid #045016; padding: 15px; margin-bottom: 10px; border-radius: 0 8px 8px 0;">
                  <div style="font-weight: 700; color: #002200; font-size: 16px; margin-bottom: 4px;">Vehicle ${i + 1}: ${v.year} ${v.make} ${v.model}</div>
                  <div style="font-size: 14px; color: #40493e;">Running Condition: ${v.running === 'yes' ? '<strong style="color: #2b6b39;">Yes</strong>' : '<strong style="color: #ba1a1a;">No</strong>'}</div>
                </li>
              `).join('')}
            </ul>
            
            <h3 style="color: #045016; border-bottom: 2px solid #ecffe2; padding-bottom: 10px; font-size: 18px;">Route & Logistics</h3>
            <table style="width: 100%; margin-bottom: 30px; font-size: 15px; line-height: 1.6;">
              <tr>
                <td style="padding: 15px; background-color: #f8fbf7; border-radius: 8px; width: 45%;">
                  <div style="font-size: 12px; text-transform: uppercase; color: #717a6d; font-weight: 700; margin-bottom: 4px;">Pickup</div>
                  <div style="font-weight: 700; color: #002200;">${pickup}</div>
                </td>
                <td style="width: 10%; text-align: center; color: #045016;">➔</td>
                <td style="padding: 15px; background-color: #f8fbf7; border-radius: 8px; width: 45%;">
                  <div style="font-size: 12px; text-transform: uppercase; color: #717a6d; font-weight: 700; margin-bottom: 4px;">Delivery</div>
                  <div style="font-weight: 700; color: #002200;">${delivery}</div>
                </td>
              </tr>
              <tr><td colspan="3" style="padding: 15px 0 0 0; color: #40493e;"><strong>Available Date:</strong> <span style="font-weight: 600; color: #002200;">${date}</span></td></tr>
            </table>
            
            ${notes ? `
            <h3 style="color: #045016; border-bottom: 2px solid #ecffe2; padding-bottom: 10px; font-size: 18px;">Client Notes</h3>
            <div style="background-color: #fffbdd; border-left: 4px solid #f2c94c; padding: 15px; border-radius: 0 4px 4px 0; color: #5a4b1d; font-style: italic; line-height: 1.5;">
              "${notes}"
            </div>
            ` : ''}
            
          </div>
          <div style="text-align: center; margin-top: 25px; font-size: 12px; color: #717a6d; line-height: 1.5;">
            This dispatch was automatically generated by the ${siteConfig.companyName} portal.<br>
            Please reply to the customer directly at <a href="mailto:${email}" style="color: #045016; text-decoration: none; font-weight: 600;">${email}</a>.
          </div>
        </div>
      `,
    };

    // If SMTP credentials are provided, try sending. 
    // Otherwise, simulate success for development/testing without crashing.
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log('No SMTP credentials provided. Simulated sending email:', mailOptions);
    }

    return NextResponse.json({ success: true, message: 'Quote request submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error handling quote form submission:', error);
    return NextResponse.json({ success: false, message: 'Failed to submit quote request' }, { status: 500 });
  }
}
