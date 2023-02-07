import Head from 'next/head';
import Layout, { name } from '@/components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{name} | Web Developer</title> 
      </Head>

    </Layout>
  )
}
