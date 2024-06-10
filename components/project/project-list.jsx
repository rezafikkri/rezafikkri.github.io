import Link from "next/link";

export default function ProjectList() {
  return (
    <>
      <div className="border border-gray-300 bg-white rounded-lg px-5 pt-4 pb-12 relative">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Reza Admin</h3>
        <p className="text-gray-700 mb-5">Templat admin yang dibuat dengan bootstrap 4</p>
        <div className="absolute bottom-4">
          <Link href="https://github.com/rezafikkri/Reza-Admin" rel="noopener noreferrer" target="_blank" className="inline-block no-underline border border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-lg px-2 py-1 text-sm mr-2">Code</Link>
          <Link href="https://rezafikkri.github.io/Reza-Admin" rel="noopener noreferrer" target="_blank" className="inline-block no-underline border border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-lg px-2 py-1 text-sm mr-2">Demo</Link>
        </div>
      </div>

      <div className="border border-gray-300 bg-white rounded-lg px-5 pt-4 pb-12 relative">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Manport</h3>
        <p className="text-gray-700 mb-5">Aplikasi pengelola raport siswa SMK dibuat dengan PHP native</p>
        <div className="absolute bottom-4">
          <Link href="https://github.com/rezafikkri/Manport" rel="noopener noreferrer" target="_blank" className="inline-block no-underline border border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-lg px-2 py-1 text-sm mr-2">Code</Link>
        </div>
      </div>

      <div className="border border-gray-300 bg-white rounded-lg px-5 pt-4 pb-12 relative">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Website Sekolah</h3>
        <p className="text-gray-700 mb-5">Website sekolah yang dibuat dengan Codeigniter 3</p>
        <div className="absolute bottom-4">
          <Link href="https://github.com/rezafikkri/School-website" rel="noopener noreferrer" target="_blank" className="inline-block no-underline border border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-lg px-2 py-1 text-sm mr-2">Code</Link>
        </div>
      </div>

      <div className="border border-gray-300 bg-white rounded-lg px-5 pt-4 pb-12 relative">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Nvim R</h3>
        <p className="text-gray-700 mb-5">Simpel konfigurasi Neovim untuk Programming</p>
        <div className="absolute bottom-4">
          <Link href="https://github.com/rezafikkri/Nvim-R" rel="noopener noreferrer" target="_blank" className="inline-block no-underline border border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-lg px-2 py-1 text-sm mr-2">Code</Link>
        </div>
      </div>
    </>
  );
}
