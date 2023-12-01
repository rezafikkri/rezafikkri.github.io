import Link from "next/link";

export default function Palestine() {
  return (
    <div className="flex justify-center p-4 bg-gray-100 text-gray-700">
      <Link
        href="https://inh.or.id/"
        rel="noopener noreferrer"
        target="_blank"
        className="ms-1 no-underline hover:text-ajwa-blue"
      >
        <span>Dukung Palestina 🇵🇸</span>
        <span className="ms-1 me-1">Dengan Memberi Bantuan Kemanusiaan Melalui INH</span>
      </Link>
    </div>
  );
}
