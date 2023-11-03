import Link from "next/link";

export default function Pagination() {
  return (
    <>
      <h3 id="other-writing" className="text-2xl mt-10 mb-5 font-semibold text-gray-800">Tulisan lainnya:</h3>
      <ol className="text-gray-700 text-xl list-decimal list-inside flex flex-col gap-3" id="pagination-list">
        <li><Link href="" className="no-underline">Membuat aplikasi CRUD dengan PDO</Link></li>
        <li><Link href="" className="no-underline">Membuat database dengan PDO</Link></li>
        <li><Link href="" className="no-underline">Lebih dalam tentang PDO</Link></li>
      </ol>
    </>
  );
}
