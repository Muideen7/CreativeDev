import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "CreativeDev | Frontend Development & Website Design Agency",
  description:
    "CreativeDev is a professional frontend development and website design agency. We build high-performance, responsive websites with a focus on modern UI/UX and clean code.",
  keywords: ["Frontend Development", "Website Design", "UI/UX Design", "Responsive Web Design", "React Developer", "Next.js Agency"],
  openGraph: {
    title: "CreativeDev | Frontend Development & Website Design Agency",
    description:
      "Expert frontend development and modern website design services to help your business grow online.",
    type: "website",
    siteName: "CreativeDev",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CreativeDev | Frontend Development & Website Design Agency",
    description: "Professional frontend development and modern website design services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-obsidian">
      <body
        className={`${inter.variable} ${sora.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
