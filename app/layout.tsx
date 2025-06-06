import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tyagi Bituminous System | Bitumen Emulsion Manufacturer India",
  description:
    "Tyagi Bituminous System is a BIS and ISO certified manufacturer of Bitumen Emulsion for roads and infrastructure in India. Trusted quality and national standards compliance.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "bitumen emulsion",
    "bituminous company",
    "bitumen manufacturer India",
    "road construction material",
    "BIS certified bitumen",
    "ISO 9001 bitumen company",
    "Tyagi Bituminous System",
    "cationic bitumen emulsion",
    "road surfacing bitumen",
  ],
  authors: [
    {
      name: "Tyagi Bituminous System",
      url: "https://www.tyagibituminoussystem.in",
    },
  ],
  creator: "Tyagi Bituminous System",
  openGraph: {
    title:
      "Tyagi Bituminous System | BIS & ISO Certified Bitumen Emulsion Manufacturer",
    description:
      "Get premium-grade Bitumen Emulsion certified by BIS and ISO standards. Serving India's infrastructure with quality and trust.",
    url: "https://www.tyagibituminoussystem.in",
    siteName: "Tyagi Bituminous System",
    images: [
      {
        url: "https://www.tyagibituminoussystem.in/tyagibituminoussystem.png",
        width: 1200,
        height: 630,
        alt: "ISO Certified Bitumen Emulsion Manufacturer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyagi Bituminous System",
    description:
      "Certified Bitumen Emulsion Manufacturer for Roads | BIS & ISO Certified",
    images: ["https://www.tyagibituminoussystem.in/tyagibituminoussystem.png"],
  },
  metadataBase: new URL("https://www.tyagibituminoussystem.in"),
  alternates: {
    canonical: "https://www.tyagibituminoussystem.in",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tyagi Bituminous System",
  description:
    "BIS and ISO certified manufacturer of premium quality Bitumen Emulsion for road construction in India.",
  url: "https://www.tyagibituminoussystem.in",
  logo: "https://www.tyagibituminoussystem.in/tyagibituminoussystem.png",
  image: "https://www.tyagibituminoussystem.in/tyagibituminoussystem.png",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Sarai, Kohand, G.T. Road Garhi Multan",
    addressLocality: "Panipat",
    addressRegion: "Haryana",
    postalCode: "132114",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 9997624171",
    contactType: "Customer Service",
  },
  sameAs: ["https://maps.google.com/?q=Tyagi+Bituminous+System+Hr"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Tyagi Bituminous System" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
