import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Navbar from "@components/Navbar";

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

const monsierRegular = localFont({
  src: "./fonts/MonsierRegular.otf",
  variable: "--font-monsier-regular",
  weight: "400",
});

const robotSlabRegular = localFont({
  src: "./fonts/RobotoSlabRegular.ttf",
  variable: "--font-robot-slab-regular",
  weight: "400",
});

export const metadata = {
  title: "Yannick Perret - Portfolio Développeur Web Fullstack",
  description: "Portfolio de Yannick Perret, Développeur Web Fullstack, Freelance spécialisé en React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, et bien d'autres technologies. Disponible pour vos projets et besoins en développement web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${monsierRegular.variable} antialiased`}
      >
      <Head>
        <title>Perret Yannick - Portfolio</title>
        <meta name="description" content="Portfolio de Yannick Perret" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
        {children}
      </body>
    </html>
  );
}
