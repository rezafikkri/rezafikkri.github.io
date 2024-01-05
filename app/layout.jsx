import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import getBaseUrl from "@/lib/get-base-url";
import Palestine from "@/components/layout/palestine";

import "@/styles/globals.css";

// font config
import { Roboto, Source_Code_Pro } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300','400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
  fallback: ['sans-serif']
});

export const fira_code = Source_Code_Pro({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  fallback: ['monospace']
});

// metadata config
const baseUrl = getBaseUrl();

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s - Reza Sariful Fikri",
    default: "Reza Sariful Fikri"
  },
  icons: {
    icon: '/favicon.ico',
    verification: {
      google: 'fLcDg3KFF-m2xDnm4TGsRylXksSQTGGfLq6FqSe8cUs',
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${roboto.variable} ${fira_code.variable}`}>
      <body className="h-screen bg-gray-50 font-roboto">
        <Palestine />
        <div className="max-w-5xl mx-auto px-4 sm:px-8"><Header /></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <main>{children}</main>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-8"><Footer /></div>
      </body>
    </html>
  );
}
