import { roboto } from "./_lib/fonts";
import Header from "./_components/header";
import Footer from "./_components/footer";

import "../styles/globals.css";
import "../styles/prism-one-dark.css";

export const metadata = {
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
      <body className="h-screen bg-gray-50">
        <div className={`max-w-4xl mx-auto px-4 sm:px-8 ${roboto.className}`}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
