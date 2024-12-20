import Profile from "@/components/about/profile";
import Summary from "@/components/about/summary";
import Skill from "@/components/about/skill";
import getBaseUrl from "@/lib/get-base-url";

const title = "Tentang Saya";
const description = "Seorang backend web developer, suka menulis dan juga membuat aplikasi open source.";
const baseUrl = getBaseUrl();

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${baseUrl}/about`,
    images: [
      {
        url: `${baseUrl}/rezas.jpg`,
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
      <header className="mt-24 text-gray-900">
        <h1 className="text-5xl font-bold">Tentang Saya</h1>
      </header>
      <Profile />
      <Summary /> 
      <Skill />
    </>
  );
}
