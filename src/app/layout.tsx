import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Paryż vs Warszawa | Lalka",
  description: "Anatomia dwóch światów w oczach Stanisława Wokulskiego",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-parchment text-charcoal">
        {children}
      </body>
    </html>
  );
}
