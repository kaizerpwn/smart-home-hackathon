const Navbar = () => {
  return (
    <div>
         <header className="text-gray-600 body-font">
  <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
    <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">HomeLab</span>
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
