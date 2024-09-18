import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demo App",
  description: "a demo app",
  icons: {
    icon: '/icon.png'
  }
};


export default function RootLayout({
 children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
        <div id="root-layout" className="h-screen w-screen">
          {/*<body className={inter.className}>*/}
          {children}
        </div>
      </body>
      </html>
  );
}
