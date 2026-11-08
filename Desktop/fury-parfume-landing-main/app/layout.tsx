import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { siteConfig } from "@/config/site";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-sans" });
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin", "cyrillic"], 
  weight: ["400", "600", "700"], 
  variable: "--font-serif" 
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — парфюмерия на разлив`,
  description: "Витрина парфюмерии на разлив FURY Parfume. Объёмы 5 и 10 мл.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${cormorant.variable} bg-wine-950 font-sans text-neutral-100 antialiased selection:bg-copper-500 selection:text-white`}>
        {/* D1. NOISE-ТЕКСТУРА */}
        <div 
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* <SmoothScroll>{children}</SmoothScroll> */}
        {children}
      </body>
    </html>
  );
}