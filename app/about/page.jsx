import Profile from "@/components/about/profile";
import Summary from "@/components/about/summary";
import Skill from "@/components/about/skill";

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
  return (
    <>
      <header className="mt-24 text-gray-800">
        <h1 className="text-5xl font-bold">Tentang Saya</h1>
      </header>
      <Profile />
      <Summary /> 
      <Skill />
    </>
  );
}
