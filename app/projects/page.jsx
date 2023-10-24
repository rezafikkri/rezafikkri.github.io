import ProjectsPage from "./projects-page";

const title = "Projek";
const description = "Karya-karya open source.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/projects',
    images: [
      {
        url: '/Reza logo.svg',
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
