import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kavero — La plateforme RH des PME africaines",
  description:
    "Gérez vos employés, congés, présences et recrutement avec Kavero. Conçu pour les PME d'Afrique de l'Ouest. Simple, moderne, en FCFA.",

  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Kavero — La plateforme RH des PME africaines",
    description:
      "Gérez vos employés, congés, présences et recrutement avec Kavero. Conçu pour les PME d'Afrique de l'Ouest. Simple, moderne, en FCFA.",
    url: "https://kaverohr.com",
    siteName: "Kavero",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Kavero — La plateforme RH des PME africaines",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kavero — La plateforme RH des PME africaines",
    description:
      "Gérez vos employés, congés, présences et recrutement avec Kavero. Conçu pour les PME d'Afrique de l'Ouest. Simple, moderne, en FCFA.",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
