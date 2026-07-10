import type { Metadata } from "next";
import { Playfair_Display, Poppins, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import MouseFollower from "@/components/animations/MouseFollower";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Luxury Wedding Films & Photography | Divya Yadav",
    template: "%s | Divya Yadav Weddings"
  },
  description: "Award-winning luxury wedding photographer, cinematic videographer, and professional photo/video editor. We specialize in capturing timeless wedding moments and high-end video editing.",
  keywords: [
    "wedding photography", 
    "luxury wedding", 
    "wedding films", 
    "cinematic videography", 
    "wedding video editing",
    "photo editing",
    "professional video editor",
    "wedding photo retouching",
    "pre-wedding shoot", 
    "bridal photography", 
    "Divya Yadav",
    "divyayadavweddings"
  ],
  authors: [{ name: "Divya Yadav" }],
  creator: "Divya Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://websidewedding-nine.vercel.app", // User's vercel domain or custom domain
    title: "Luxury Wedding Films & Photography | Divya Yadav",
    description: "Award-winning luxury wedding photographer and cinematic videographer. Capturing timeless moments.",
    siteName: "Divya Yadav Weddings",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Wedding Films & Photography",
    description: "Award-winning luxury wedding photographer and cinematic videographer.",
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
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-poppins text-foreground bg-background selection:bg-primary/10">
        <LoadingScreen />
        <MouseFollower />
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <WhatsAppButton />
      </body>
    </html>
  );
}
