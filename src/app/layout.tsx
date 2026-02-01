import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EMS Energi | EMS Træning i København",
  description:
    "Oplev kraften af EMS træning hos EMS Energi. 20 minutters effektiv træning der svarer til flere timers konventionel træning. Book din gratis prøvetræning i dag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${fraunces.variable} ${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
