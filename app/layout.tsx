import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://whitelightning.store";
const siteName = "BEAST";
const productName = "White Lightning Glow Jacket";
const description =
  "Shop the BEAST White Lightning glow-in-the-dark jacket, a premium futuristic streetwear piece by Premraj made to stand out after dark.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "BEAST | White Lightning Glow Jacket",
    template: "%s | BEAST",
  },
  description,
  keywords: [
    "BEAST",
    "BEAST jacket",
    "BEAST streetwear",
    "White Lightning jacket",
    "glow in the dark jacket",
    "glow jacket India",
    "Premraj streetwear",
    "futuristic fashion",
    "luxury streetwear",
    "night streetwear",
  ],
  authors: [{ name: "BEAST" }, { name: "Premraj" }],
  creator: "BEAST",
  publisher: "BEAST",
  category: "Fashion",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: "BEAST | White Lightning Glow Jacket",
    description,
    images: [
      {
        url: "/BEASTmodel2.png",
        width: 1200,
        height: 1600,
        alt: "Model wearing the BEAST White Lightning glow jacket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BEAST | White Lightning Glow Jacket",
    description,
    images: ["/BEASTmodel2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${siteName} ${productName}`,
  brand: {
    "@type": "Brand",
    name: siteName,
  },
  description,
  image: [`${siteUrl}/BEASTmodel2.png`, `${siteUrl}/front-product-image.png`],
  category: "Glow-in-the-dark streetwear jacket",
  offers: {
    "@type": "Offer",
    url: siteUrl,
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
