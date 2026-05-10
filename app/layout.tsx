import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chennai Furniture | Best Furniture Store in Chennai",
  description: "Chennai Furniture offers premium quality sofas, beds, dining tables, wardrobes, and customized furniture in Chennai with affordable prices, installation, and same-day delivery services.",
  keywords: [
    "Furniture Store in Chennai", "Best Furniture Shop in Chennai", "Sofa Shop Chennai", 
    "Wooden Furniture Chennai", "Modern Furniture Chennai", "Affordable Furniture Chennai", 
    "Home Furniture Store", "Office Furniture Chennai", "Dining Table Chennai", 
    "Bedroom Furniture Chennai", "Wardrobe Shop Chennai", "Furniture Near Madipakkam", 
    "Premium Furniture Chennai", "Customized Furniture Chennai", "Chennai Furniture Shop",
    "Furniture Store in Madipakkam", "Furniture Shop Near Medavakkam", "Best Sofa Shop in Puzhuthivakkam", 
    "Furniture Store Near Velachery", "Furniture Shop in South Chennai", "Furniture Delivery in Chennai", 
    "Madipakkam Furniture Store", "Chennai Furniture Near Vasanth & Co", "Furniture Shop Near Me Chennai"
  ],
  openGraph: {
    title: "Chennai Furniture | Premium Home & Office Furniture",
    description: "Chennai Furniture is one of the trusted furniture stores in Chennai offering high-quality sofas, beds, dining tables, wardrobes, office furniture, and customized furniture solutions. Located in Madipakkam.",
    type: "website",
    locale: "en_IN",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
