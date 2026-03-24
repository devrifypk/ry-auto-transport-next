import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

export const metadata: Metadata = {
  title: "R&Y Auto Transport | Reliable Auto Transport Brokerage",
  description: "Ship your vehicle anywhere in the U.S. with licensed and insured carriers. Trust R&Y Auto Transport for safe, reliable auto transport services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        <Header />
        <main style={{ minHeight: 'calc(100vh - 300px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
