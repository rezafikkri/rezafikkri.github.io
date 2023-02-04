import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Reza Sariful Fikri . Web Developer</title> 
      </Head>
      <main className="max-w-3xl mx-auto px-3 sm:px-6">
        <p>Membuat website</p>
      </main>
    </>
  )
}
