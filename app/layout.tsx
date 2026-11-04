import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CommPrep AI — Capgemini Communication Assessment Simulator",
  description:
    "Master corporate English, business writing, situational judgment, and spoken communication with 15 complete mock tests and realistic exam simulation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Manrope:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F5F7FB] text-[#172033] antialiased">
        {children}
      </body>
    </html>
  );
}
