import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
      <body className={`${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
