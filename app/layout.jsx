import { roboto } from "./_lib/fonts";
import Header from "./_components/layout/header";
import Footer from "./_components/layout/footer";
import getBaseUrl from "./_lib/getBaseUrl";

import "../styles/globals.css";

const baseUrl = getBaseUrl();

export const metadata = {
  title: {
    metadataBase: baseUrl,
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

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body className={`h-screen bg-gray-50 ${roboto.className}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-8"><Header /></div>
        <div className={`max-w-4xl mx-auto px-4 sm:px-8`}>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
