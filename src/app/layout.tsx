import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Nun = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--merriweather'
});

export const metadata = {
  title: "CabShare",
  description: "Sharing cab made easy!",
  openGraph: {
    title: "CabShare",
    description: "Save money and share rides with friends!",
    url: "https://project-cabshare.vercel.app",
    siteName: "CabShare",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CabShare Preview",
      },
    ],
    type: "website",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Nun.className} suppressHydrationWarning >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
