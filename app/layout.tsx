import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Botifarma - Tu farmacia de confianza",
  description: "Botifarma es tu farmacia online de confianza. Encuentra medicamentos, productos de cuidado personal y salud con entrega rápida y precios competitivos. Tu bienestar es nuestra prioridad.",
  keywords: "farmacia, medicamentos, salud, cuidado personal, botifarma, farmacia online",
  authors: [{ name: "Botifarma" }],
  creator: "Botifarma",
  publisher: "Botifarma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://botifarma.com'),
  openGraph: {
    title: "Botifarma - Tu farmacia de confianza",
    description: "Botifarma es tu farmacia online de confianza. Encuentra medicamentos, productos de cuidado personal y salud con entrega rápida y precios competitivos.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Botifarma - Tu farmacia de confianza",
    description: "Botifarma es tu farmacia online de confianza. Encuentra medicamentos, productos de cuidado personal y salud.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
