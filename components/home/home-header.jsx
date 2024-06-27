import Link from "next/link";
import Contact from "../about/contact";

export default function HomeHeader() {
  return (
    <header className="mt-24 text-gray-800"> 
      <h1 className="text-5xl font-bold text-gray-900">Halo, Saya Reza!</h1>
      <p className="mt-7 text-xl">Ini adalah website pribadi saya.</p>
      <p className="mt-7 text-xl mb-9">Dalam website ini saya <Link href="/blogs">menulis</Link> mengenai programming, khususnya di bidang pengembangan web, menggunakan bahasa PHP dan JavaScript dan hal-hal umum seputar teknologi. Selain itu saya juga suka membuat aplikasi <Link href="/projects">open-source</Link>.</p>
      <Contact />
    </header>
  );
}
