import localFont from "next/font/local";
import {JetBrains_Mono}from "next/font/google"
import "./globals.css";
import Header from "@/components/header";
import PageTransition from "@/components/pageTransition";
import StairTransition from "@/components/stairTransition";
import StarsCanvas from "@/components/StarBackground";
import { SpeedInsights } from '@vercel/speed-insights/next';

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

export const metadata = {
  title: "Soufiane refai",
  description: "my portfolio",
};
const JetBrainsMono=JetBrains_Mono({
  subsets:["latin"],
  weight:["100", "200", "300", "400", "500", "600", "700", "800"],
  variable:"--font-jetbrainsmono"
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={JetBrainsMono.variable}
      >
        
        <Header/>
        <StairTransition/>
        <PageTransition>
          {children}
          <SpeedInsights />
        </PageTransition>
        <StarsCanvas/>
      </body>
    </html>
  );
}
