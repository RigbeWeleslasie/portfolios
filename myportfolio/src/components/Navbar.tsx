
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900 text-white z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
        Rigbe W.Weleslasie.dev
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-blue-400">About</Link>
          <Link href="#projects" className="hover:text-blue-400">Projects</Link>
          <Link href="#skills" className="hover:text-blue-400">Skills</Link>
          <Link href="#contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar