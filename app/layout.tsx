import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chauffeur VTC à Villefranche-sur-Saône et ses environs | Taxi Villefranche",
  description: "Réservez votre Chauffeur VTC / Taxi à Villefranche-sur-Saône, Lyon, et toute la région. Transferts gares, aéroports, trajets professionnels et personnels 24/7.",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="home wp-singular page-template page-template-elementor_header_footer page page-id-2182 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor wp-child-theme-hello-theme-child-master hello-elementor-default elementor-default elementor-template-full-width elementor-kit-2150 elementor-page elementor-page-2182">
        {children}
      </body>
    </html>
  );
}
