import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "Kavero — Le système RH moderne",
description: "Plateforme RH moderne pour gérer employés et recrutement",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="fr">
<body>
{children}
</body>
</html>
);
}