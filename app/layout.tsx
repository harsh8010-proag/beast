import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://whitelightning.store"),
  title: "White Lightning | Futuristic Glow Jacket",
  description:
    "Own The Night with White Lightning, a premium glow-in-the-dark streetwear jacket by Premraj.",
  keywords: [
    "White Lightning jacket",
    "glow in the dark jacket",
    "Premraj streetwear",
    "futuristic fashion",
    "luxury streetwear",
  ],
  openGraph: {
    title: "White Lightning | Own The Night",
    description:
      "A futuristic glow jacket designed to make you stand out after dark.",
    images: ["/BEASTmodel2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
