import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ui/scroll-to-top";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ImaginAItion - Unlimited Creative Possibilities at 67% Less Cost",
  description: "AI creative services for Philippine brands. AI fashion models, product photography, and talking avatars with unlimited venues and complete creative freedom.",
  keywords: ["AI creative services Philippines", "AI fashion models", "AI product photography", "talking avatars", "Philippine brands"],
  authors: [{ name: "ImaginAItion" }],
  creator: "ImaginAItion",
  publisher: "ImaginAItion",
  openGraph: {
    title: "ImaginAItion - Unlimited Creative Possibilities",
    description: "AI creative services for Philippine brands with 67% cost savings and unlimited venues.",
    url: "https://imaginaition.ph",
    siteName: "ImaginAItion",
    locale: "en_PH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased bg-black text-white`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
