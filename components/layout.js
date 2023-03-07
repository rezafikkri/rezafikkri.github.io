import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import { roboto } from "@/lib/fonts";

export const name = "Reza Sariful Fikri";

export default function Layout({ children }) {
  return (
    <div className={`max-w-4xl mx-auto px-4 sm:px-8 ${roboto.variable} font-sans`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="http://localhost:3000/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
