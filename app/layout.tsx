import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.praneethravuri.com'),
  title: "Praneeth Ravuri | Web Developer & Software Engineer",
  description: "Praneeth Ravuri is a passionate web developer, software engineer, and automation enthusiast based in California. Explore my portfolio and projects.",
  keywords: "web developer, software engineer, automation, California, Max Verstappen, coding, culinary,Python, C, C++, HTML, CSS, JavaScript, TypeScript, Java,SQL / MySQL, MongoDB, Git, Docker, Visual Studio Code, Linux, Windows, Postman, AWS, Vite, Next.js, Unix, Jenkins, Kubernetes, Vue.js, Express.js, Node.js, Flask, NumPy, Tailwind CSS, JWT, React, Redux, Socket.IO, Selenium, Jest, BeautifulSoup, Requests, Sass, Shad-cn, Object-Oriented Programming, Test-Driven Development, Software Development Life Cycle, Version Control, Software Design Patterns, Functional Programming, Performance Optimization, Client-Server Architectures, Networking Protocols",
  openGraph: {
    title: "Praneeth Ravuri | Web Developer & Software Engineer",
    description: "Passionate web developer, software engineer, and automation enthusiast based in California. Explore my portfolio and projects.",
    type: "website",
    url: "https://www.praneethravuri.com",
    images: [
      {
        url: "/website_image.png",
        width: 1200,
        height: 630,
        alt: "Praneeth Ravuri - Web Developer and Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Praneeth Ravuri | Web Developer & Software Engineer",
    description: "Passionate web developer, software engineer, and automation enthusiast based in California. Explore my portfolio and projects.",
    images: ["https://www.praneethravuri.com/twitter-image.jpg"],
  },
  icons: {
    icon: "/new_favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.praneethravuri.com" />
        <link rel="icon" href="/new_favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${montserrat.className} bg-black text-white`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}