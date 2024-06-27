import Contact from "./contact";

export default function Profile() {
  return (
    <section className="mt-12">
      <div className="rounded-full inline-block border-4 border-gray-600 mb-5">
        <img src="/rezas.jpg" height={150} width={150} alt="Photo Profile" className="rounded-full" loading="lazy" decoding="async" />
      </div>
      <Contact />
    </section>
  );
}
