import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import  Provider  from '@/redux/provider';
import { Footer , Navbar } from '@/components/common';

import {Setup} from '@/components/utils';

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
          <Setup />
            <Navbar/>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8'>
              {children}
            </div>  {/* the place that our pages are going into */}
            <Footer/>
        </Provider>
      </body>
    </html>
  );
}
