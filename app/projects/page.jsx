import ProjectsPage from "./projects-page";
import getBaseUrl from "../_lib/getBaseUrl";

const title = "Projek";
const description = "Karya-karya open source.";
const baseUrl = getBaseUrl();

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${baseUrl}/projects`,
    images: [
      {
        url: `${baseUrl}/Reza logo.svg`,
        width: 744,
        height: 744,
      }, 
    ],
    type: 'website',
  },
};

export default function Page() {
  return (
    <ProjectsPage />
  );
}
