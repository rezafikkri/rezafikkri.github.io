import Link from "next/link";

export default function Palestine() {
  return (
    <div className="sm:text-center py-3 px-4 bg-gray-100 text-gray-700">
      <span className="me-1">Free Palestine 🇵🇸</span>
      <Link
        href="https://inh.or.id/"
        rel="noopener noreferrer"
        target="_blank"
        className="group no-underline hover:text-ajwa-blue inline-block"
      >
        <span className="me-1">Kirim Donasi Melalui INH</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" className="inline-block align-baseline stroke-gray-700 group-hover:stroke-ajwa-blue" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg>
      </Link>
    </div>
  );
}
