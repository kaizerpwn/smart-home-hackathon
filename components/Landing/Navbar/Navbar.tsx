import Image, { ImageLoaderProps } from "next/image";
import Link from "next/link"

const Navbar = () => {

  const imageLoader = ({ src }: ImageLoaderProps) => {
    return src;
}

  return (
  <header className="sticky top-0 text-gray-600 bg-white body-font z-99">
  <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
    <a className="flex items-center mb-4 font-medium text-gray-900 cursor-pointer title-font md:mb-0">
    <Image loader={imageLoader} className="object-cover object-center w-5/6 h-fullr" alt="hero image smart home" src={`images/logo2.png`} width={10} height={10} />
    </a>
    <nav className="flex flex-wrap items-center justify-center text-lg cursor-pointer md:ml-auto">
      <a href="#pocetna" className="mr-10 hover:text-gray-900 ">Početna</a>
      <a href="#onama"  className="mr-10 hover:text-gray-900">O Nama</a>
      <a href="#benefiti"  className="mr-10 hover:text-gray-900">Benefiti</a>
      <a href="#instalacija"  className="mr-10 hover:text-gray-900">Instalacija</a>
    </nav>
          <Link href="/auth/login" className="inline-flex items-center px-10 py-2 mt-4 text-xl rounded-full headerBtn md:mt-0">Prijavite Se</Link>
  </div>
</header>
  )
}

export default Navbar
