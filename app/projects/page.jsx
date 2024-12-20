import ProjectList from "@/components/project/project-list";
import getBaseUrl from "@/lib/get-base-url";

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
    <>
      <header className="mt-24 text-gray-900">
        <h1 className="text-5xl font-bold">Projek</h1>
      </header>
      <section className="mt-12 text-gray-800">
        <div className="mt-9 grid sm:grid-cols-2 gap-4">
          <ProjectList />
        </div>
      </section>
    </>
  );
}
