import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbars from "@/components/main/navbars";
import Footer from "@/components/main/footer";
import ProgressBar from "@/components/main/progressBar";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/KalamehWeb-Light.woff2",
      weight: "400",
      style: "light",
    },
    {
      path: "../public/fonts/KalamehWeb-Medium.woff2",
      weight: "800",
      style: "light",
    },
    {
      path: "../public/fonts/KalamehWeb-Regular.woff2",
      weight: "600",
      style: "light",
    },
  ],
});

export const metadata: Metadata = {
  title: "Movie Hall",
  description: "Let's watch movies together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={`${myFont.className} font-sans antialiased`}>
        <ProgressBar />
        <Navbars />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
