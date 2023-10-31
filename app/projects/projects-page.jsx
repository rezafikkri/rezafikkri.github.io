import ProjectList from "@/components/project/project-list";

export default function ProjectsPage() {
  return (
    <>
      <header className="mt-24 text-gray-800">
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
