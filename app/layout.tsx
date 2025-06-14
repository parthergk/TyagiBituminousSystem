import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Font optimization
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://tyagibituminoussystem.in"),
  
  // Basic metadata
  title: {
    default: "Tyagi Bituminous System | BIS & ISO Certified Bitumen Emulsion Manufacturer India",
    template: "%s | Tyagi Bituminous System"
  },
  description: "Leading BIS and ISO 9001:2015 certified manufacturer of premium quality Bitumen Emulsion for road construction and infrastructure development in India. Trusted nationwide supplier with 25+ years of expertise.",
  
  // Keywords and SEO
  keywords: [
    "bitumen emulsion manufacturer",
    "BIS certified bitumen emulsion",
    "ISO 9001 bitumen company India",
    "cationic bitumen emulsion supplier",
    "anionic bitumen emulsion",
    "road construction materials India",
    "bituminous materials supplier",
    "Tyagi Bituminous System",
    "road surfacing solutions",
    "infrastructure development materials",
    "bitumen emulsion Haryana",
    "road maintenance products"
  ],
  
  // Author and creator info
  authors: [
    {
      name: "Tyagi Bituminous System",
      url: "https://tyagibituminoussystem.in",
    },
  ],
  creator: "Tyagi Bituminous System",
  publisher: "Tyagi Bituminous System",
  
  // Robots and indexing
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
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.ico"
  },
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tyagibituminoussystem.in",
    siteName: "Tyagi Bituminous System",
    title: "Tyagi Bituminous System | BIS & ISO Certified Bitumen Emulsion Manufacturer",
    description: "Premium-grade Bitumen Emulsion certified by BIS and ISO 9001:2015 standards. Leading manufacturer serving India's infrastructure development with quality and trust since 1998.",
    images: [
      {
        url: "/tyagibituminoussystem.png",
        width: 1200,
        height: 630,
        alt: "Tyagi Bituminous System - ISO Certified Bitumen Emulsion Manufacturer",
        type: "image/png"
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@tyagibituminous",
    creator: "@tyagibituminous",
    title: "Tyagi Bituminous System | Certified Bitumen Emulsion Manufacturer",
    description: "BIS & ISO certified Bitumen Emulsion manufacturer for road construction in India. Premium quality, nationwide delivery, 25+ years expertise.",
    images: ["/tyagibituminoussystem.png"],
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://tyagibituminoussystem.in",
  },
  
  // Additional metadata
  category: "Manufacturing",
  classification: "Business",
  referrer: "origin-when-cross-origin",
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// Enhanced JSON-LD structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://tyagibituminoussystem.in/#organization",
  name: "Tyagi Bituminous System",
  alternateName: "TBS",
  description: "BIS and ISO 9001:2015 certified manufacturer of premium quality Bitumen Emulsion for road construction and infrastructure development in India.",
  url: "https://tyagibituminoussystem.in",
  logo: {
    "@type": "ImageObject",
    "@id": "https://tyagibituminoussystem.in/#logo",
    url: "https://tyagibituminoussystem.in/logo.png",
    width: 300,
    height: 100,
    caption: "Tyagi Bituminous System Logo"
  },
  image: {
    "@type": "ImageObject",
    "@id": "https://tyagibituminoussystem.in/#image",
    url: "https://tyagibituminoussystem.in/company-image.jpg",
    width: 1200,
    height: 630,
    caption: "Tyagi Bituminous System Manufacturing Facility"
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sarai, Kohand, G.T. Road Garhi Multan",
    addressLocality: "Panipat",
    addressRegion: "Haryana",
    postalCode: "132114",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "29.3909",
    longitude: "76.9635"
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9997624171",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"]
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9997624171",
      contactType: "Sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"]
    }
  ],
  sameAs: [
    "https://maps.google.com/?q=Tyagi+Bituminous+System"
  ],
  foundingDate: "1998",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 50,
    maxValue: 100
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Cationic Bitumen Emulsion",
        description: "High-quality cationic bitumen emulsion for road construction"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Anionic Bitumen Emulsion",
        description: "Premium anionic bitumen emulsion for various applications"
      }
    }
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "BIS Certification",
      credentialCategory: "Quality Standard"
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "ISO 9001:2015 Certification",
      credentialCategory: "Quality Management System"
    }
  ]
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://tyagibituminoussystem.in/#website",
  url: "https://tyagibituminoussystem.in",
  name: "Tyagi Bituminous System",
  description: "Official website of Tyagi Bituminous System - Leading manufacturer of bitumen emulsion in India",
  publisher: {
    "@id": "https://tyagibituminoussystem.in/#organization"
  },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://tyagibituminoussystem.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://tyagibituminoussystem.in"
    }
  ]
};

// Combined JSON-LD
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [organizationJsonLd, websiteJsonLd, breadcrumbJsonLd]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={roboto.variable}>
      <head>
        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(structuredData, null, 0) 
          }}
        />
        
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      </head>
      <body className="font-sans antialiased">
        <NavBar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
