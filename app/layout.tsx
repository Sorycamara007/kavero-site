import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kavero — Le système RH des entreprises modernes",
  description:
    "Kavero est une plateforme RH moderne qui simplifie la gestion des équipes, du recrutement et des opérations RH.",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Kavero — Le système RH des entreprises modernes",
    description:
      "Une nouvelle génération de gestion RH pour les entreprises modernes.",
    url: "https://kaverohr.com",
    siteName: "Kavero",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kavero — Le système RH des entreprises modernes",
    description:
      "Une plateforme simple pour gérer les équipes, le recrutement et les opérations RH.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}