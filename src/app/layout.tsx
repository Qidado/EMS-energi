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
  metadataBase: new URL("https://emsenergi.dk"),
  title: "EMS Energi | EMS Træning i København",
  description:
    "Oplev kraften af EMS træning hos EMS Energi. 20 minutters effektiv træning der svarer til flere timers konventionel træning. Også efterfødselstræning. Book din første EMS session i dag.",
  keywords: [
    "EMS træning",
    "EMS København",
    "elektrisk muskelstimulation",
    "EMS fitness",
    "EMS studio København",
    "effektiv træning",
  ],
  openGraph: {
    siteName: "EMS Energi",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${fraunces.variable} ${jakarta.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Spring til hovedindhold
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthClub",
              name: "EMS Energi",
              description:
                "EMS træningsstudie på Østerbro, København. 20 minutters effektiv helkropstræning med elektrisk muskelstimulation.",
              url: "https://emsenergi.dk",
              telephone: "+4531425364",
              email: "info@emsenergi.dk",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Nordre Frihavnsgade 65, kl. tv",
                addressLocality: "Østerbro",
                postalCode: "2100",
                addressCountry: "DK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 55.7020,
                longitude: 12.5870,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "06:30",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              priceRange: "$$",
              sameAs: [
                "https://www.instagram.com/emsenergi",
                "https://www.facebook.com/emsenergi",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
