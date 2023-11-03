import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import getBaseUrl from "@/lib/get-base-url";

import "@/styles/globals.css";

// font config
import { Roboto, Fira_Code } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300','400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-roboto'
});

export const fira_code = Fira_Code({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-fira-code'
})

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
    <html lang="en" className={`${roboto.variable} ${fira_code.variable}`}>
      <body className="h-screen bg-gray-50 font-roboto">
        <div className="max-w-5xl mx-auto px-4 sm:px-8"><Header /></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <main>{children}</main>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-8"><Footer /></div>
      </body>
    </html>
  );
}
