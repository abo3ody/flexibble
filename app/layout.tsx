import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Flexibble",
   description: "Showcase and dicover remarkable developer projects",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <head>
            <link rel="icon" href="/images/favicon.ico" />
         </head>
         <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
         </body>
      </html>
   );
}
