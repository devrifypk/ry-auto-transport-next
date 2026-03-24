import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { 
      firstName, lastName, phone, email, 
      vehicleYear, vehicleMake, vehicleModel, 
      pickup, delivery, date, running, notes 
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
      from: process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@ryautotransport.com',
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER || 'yakov@ryautotransport.com',
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
        Vehicle: ${vehicleYear} ${vehicleMake} ${vehicleModel}
        Running Condition: ${running === 'yes' ? 'Runs and Drives' : 'Does Not Run'}
        
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
        <h2>New Quote Request from Website</h2>
        
        <h3>Customer Information</h3>
        <ul>
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        
        <h3>Vehicle Information</h3>
        <ul>
          <li><strong>Vehicle:</strong> ${vehicleYear} ${vehicleMake} ${vehicleModel}</li>
          <li><strong>Running Condition:</strong> ${running === 'yes' ? 'Runs and Drives' : 'Does Not Run'}</li>
        </ul>
        
        <h3>Route & Timing</h3>
        <ul>
          <li><strong>Pickup:</strong> ${pickup}</li>
          <li><strong>Delivery:</strong> ${delivery}</li>
          <li><strong>First Available Date:</strong> ${date}</li>
        </ul>
        
        <h3>Additional Notes</h3>
        <p>${notes || 'None provided'}</p>
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
