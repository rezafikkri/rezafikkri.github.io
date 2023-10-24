import AboutPage from  "./about-page";

const title = "Tentang Saya";
const description = "Seorang web developer, suka menulis dan juga membuat aplikasi open source.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/about',
    images: [
      {
        url: '/rezas.jpg',
        width: 400,
        height: 400,
      }, 
    ],
    type: 'profile',
  },
};

export default function Page() {
  return <AboutPage />
}
