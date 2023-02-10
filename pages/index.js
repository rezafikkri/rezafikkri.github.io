import Head from 'next/head';
import Layout, { name } from '@/components/layout';

export default function Home() {
  const title = `${name} | Web Developer`;

  return (
    <Layout>
      <Head>
        <title>{title}</title> 
      </Head>

    </Layout>
  )
}
