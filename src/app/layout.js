import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  metadataBase: new URL('https://cubecrafter.azurewebsites.net/'),
  title: {
    default: "Cube Crafter",
    template: "%s | Cube Crafter"
  },
  description: "The ultimate Discord bot for speedcubers. Generate scrambles, time your solves, and track your progress.",
  keywords: ["Rubik's Cube", "Speedcubing", "Discord Bot", "Cube Timer", "Scramble Generator", "Speedsolving", "Rubik's Bot", "Cube Tracking", "Cubing Community"],
  authors: [{ name: "Cube Crafter Team" }],
  creator: "Cube Crafter Team",
  openGraph: {
    title: "Cube Crafter - The Ultimate Speedcubing Discord Bot",
    description: "Generate scrambles, time your solves, and track your progress directly in Discord.",
    url: 'https://cubecrafter.azurewebsites.net/',
    siteName: 'Cube Crafter',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'google26571947d0b2bcc9',
  },
};

export const viewport = {
  themeColor: '#23214c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
