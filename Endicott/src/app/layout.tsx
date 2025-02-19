
//import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Metadata } from "next";

import '/public/css/siteStandard.css';
// import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Endicott Clay Products Company",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>   

<meta name="robots" content="noindex, nofollow"   
/> 
</Head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}style={{ paddingTop: '125px' } }
      >
        {children}
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title: 'Endicott Clay Products: High-Quality Brick Manufacturer', 
  description: 'Endicott Clay Products: Your trusted source for high-quality brick. We offer a wide selection of face brick, thin brick, and pavers for any project. Explore our products and find inspiration for your designs.',
  keywords: 'brick, black brick, red brick, brown brick, face brick, thin brick, pavers, clay products, brick manufacturer, North America', 
  openGraph: {
    title: 'Endicott Brick Projects',
    description: 'Build with the best. Endicott brick provides unmatched durability, beauty, and sustainability for your residential or commercial projects. Discover our range of colors, textures, and sizes.',
    url: 'https://www.endicott.com', 
    siteName: 'Endicott',
    images: [
      {
        url: 'https://endicottfiles.com/StanleyMuseumBox.jpg', 
        width: 800,
        height: 800,
      },
      {
        url: 'https://endicottfiles.com/EastPrairieBox.jpg',
        width: 800,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Endicott Brick ',
    description: 'Get inspired by these architectural designs featuring Endicott brick.',
    site: '@EndicottBrick', // Changed to the correct format for Twitter handle
    images: [
      'https://endicottfiles.com/StanleyMuseumBox.jpg',
      'https://endicottfiles.com/EastPrairieBox.jpg',
    ],
  },
};