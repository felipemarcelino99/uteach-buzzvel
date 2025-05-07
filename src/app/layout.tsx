import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "uTeach",
  description:
    "Teach students worldwide - Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Uteach | Teach students worldwide</title>
        <meta
          name="description"
          content="Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="uTeach, students, courses, online, tecnology, educational platform, education"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="uTeach | Educational platform" />
        <meta
          property="og:description"
          content="Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies."
        />
        <meta
          property="og:image"
          content="https://uteach-buzzvel.vercel.app/images/og-image.webp"
        />
        <meta property="og:url" content="https://uteach-buzzvel.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="uTeach |  Educational platform" />
        <meta
          name="twitter:description"
          content="Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies."
        />
        <meta
          name="twitter:image"
          content="https://uteach-buzzvel.vercel.app/images/og-image.webp"
        />
      </Head>

      <body
        className={`${roboto.variable} antialiased font-[family-name:var(--font-roboto)] overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
