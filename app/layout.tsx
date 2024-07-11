import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/app/(root)/CustomCursor";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Praneeth Ravuri",
  description: "Passionate web developer, software engineer, and automation enthusiast based in California. A devoted fan of Max Verstappen, I bring the same speed and precision to my projects. When not coding, you will find me whipping up culinary delights in the kitchen.",
  icons: {
    icon: "/new_favicon.ico",
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
        <link rel="icon" href="/new_favicon.ico" sizes="any" />
      </head>
      <body className={`${montserrat.className} bg-black text-white`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
