import Head from "next/head";
import Layout, { name } from "@/components/layout";
import PostList from "@/components/post-list";
import BlogHeader from "@/components/blog-header";
import { getPostSlugs } from "@/lib/posts";

export default function Topic() {
  const title = ``;

  return (
    <Layout>
      
    </Layout>
  );
}

export async function getStaticProps() {

}

export async function getStaticPaths() {
  const paths = getPostSlugs();
  return {
    paths,
    fallback: false,
  };
}
