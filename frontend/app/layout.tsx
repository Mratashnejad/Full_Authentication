import type { Metadata } from "next";
import { Inter } from "next/font/google";
import  Provider  from '@/redux/provider';
import "@/styles/globals.css";
import { Footer , Navbar } from '@/components/common';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Authentication",
  description: "Full authentication that provides by jwt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
            <Navbar/>
              <div>{children}</div>  {/* the place that our pages are going into */}
            <Footer/>
        </Provider>
      </body>
    </html>
  );
}
