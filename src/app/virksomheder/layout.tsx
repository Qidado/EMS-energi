import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Virksomheder | EMS Energi",
  description:
    "EMS firmapakker til din virksomhed. Effektiv 20-minutters træning der forebygger skader, øger energi og reducerer sygefravær. Få et uforpligtende tilbud.",
  openGraph: {
    url: "/virksomheder",
    title: "For Virksomheder | EMS Energi",
    description:
      "EMS firmapakker til din virksomhed. Effektiv 20-minutters træning der forebygger skader og øger energi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Virksomheder | EMS Energi",
    description:
      "EMS firmapakker til din virksomhed. Effektiv 20-minutters træning der forebygger skader og øger energi.",
  },
  alternates: {
    canonical: "/virksomheder",
  },
};

export default function VirksomhederLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
