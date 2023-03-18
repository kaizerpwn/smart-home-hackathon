import Image, { ImageLoaderProps } from "next/image";

const Navbar = () => {

  const imageLoader = ({ src }: ImageLoaderProps) => {
    return src;
}

  return (
    <div>
         <header className="text-gray-600 body-font">
  <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
    <a className="flex items-center mb-4 font-medium text-gray-900 cursor-pointer title-font md:mb-0">
    <Image loader={imageLoader} className="object-cover object-center w-5/6 h-fullr" alt="hero image smart home" src={`images/logo2.png`} width={10} height={10} />
    </a>
    <nav className="flex flex-wrap items-center justify-center text-lg cursor-pointer md:ml-auto">
      <a className="mr-10 hover:text-gray-900 ">Home</a>
      <a className="mr-10 hover:text-gray-900">About Us</a>
      <a className="mr-10 hover:text-gray-900">Benefits</a>
      <a className="mr-10 hover:text-gray-900">Setup</a>
    </nav>
    <button className="inline-flex items-center px-10 py-2 mt-4 text-xl rounded-full headerBtn md:mt-0">Prijavite Se
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar
