import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { roboto } from "@/lib/fonts";
import NProgress from "@/lib/nprogress";
import { useRouter } from "next/router";
import { useEffect } from "react";

import "@/styles/globals.css";
import "@/styles/prism-one-dark.css";
import "@/styles/nprogress.css";

export default function App({ Component, pageProps }) {
  const name = "Reza Sariful Fikri";
  const router = useRouter();

  const isGithubActions = process.env.GITHUB_ACTIONS || false;
  let baseUrl = '';
  if (isGithubActions) {
    baseUrl = 'https://rezafikkri.github.io';
  }

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }

    const handleStop = () => {
      NProgress.done()
    }

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleStop)
    router.events.on("routeChangeError", handleStop)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleStop)
      router.events.off("routeChangeError", handleStop)
    }
  }, [router])

  return <>
    <div className={`max-w-4xl mx-auto px-4 sm:px-8 ${roboto.className}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main><Component {...pageProps} name={name} baseUrl={baseUrl} /></main>
      <Footer />
    </div> 
  </>;
}
