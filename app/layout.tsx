import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mercier Reception | Traiteur de mariage",
  description:
    "Page d'accueil d'un site vitrine pour traiteur de mariage : savoir-faire, menus, galerie photos et demande de devis."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
