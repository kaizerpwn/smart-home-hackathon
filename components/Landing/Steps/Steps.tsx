import Image, { ImageLoaderProps } from "next/image";

const Steps = () => {

    const imageLoader = ({ src }: ImageLoaderProps) => {
        return src;
    }

  return (
    <section className="pb-40 text-gray-600 body-font">
  <div className="container flex flex-wrap px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
          <h2 className="mb-10 text-4xl font-semibold">Kako Instalirati?</h2>
            <div className="relative flex pb-12">
              <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
            <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
          <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
              </div>
          <div className="flex-grow pl-4">
            <h2 className="mb-1 text-lg font-medium tracking-wider text-black title-font">KORAK 1</h2>
            <p className="leading-relaxed">Izvadite Homelab Hub iz kutije i pronađite centralnu lokaciju u vašem domu gdje će Hub imati najbolju konekciju sa vašim pametnim uređajima.</p>
          </div>
        </div>
        <div className="relative flex pb-12">
          <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
            <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="mb-1 text-lg font-medium tracking-wider text-gray-900 title-font">KORAK 2</h2>
            <p className="leading-relaxed">Povežite Hub sa strujom i Ethernet kablom sa vašim routerom/modemom.</p>
          </div>
        </div>
        <div className="relative flex pb-12">
          <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
            <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="mb-1 text-lg font-medium tracking-wider text-gray-900 title-font">KORAK 3</h2>
            <p className="leading-relaxed">Preuzmite i instalirajte Homelab aplikaciju na vaš pametni telefon ili tablet.</p>
          </div>
        </div>
        <div className="relative flex pb-12">
          <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
            <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="mb-1 text-lg font-medium tracking-wider text-gray-900 title-font">KORAK 4</h2>
            <p className="leading-relaxed">Kreirajte Homelab nalog i uparite vaše pametne uređaje sa Hub-om koristeći aplikaciju.</p>
          </div>
        </div>
        <div className="relative flex">
          <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="mb-1 text-lg font-medium tracking-wider text-gray-900 title-font">ZADNJI KORAK</h2>
            <p className="leading-relaxed">Prilagodite vaše postavke i preference pametnog doma i uživajte u kontroli i praktičnosti vašeg automatizovanog pametnog doma sa Homelab-om.</p>
          </div>
        </div>
      </div>
      <Image loader={imageLoader} className="object-cover object-center mt-12 rounded-lg lg:w-3/5 md:w-1/2 md:mt-0" alt="hero image smart home" src={`https://dummyimage.com/1200x500`} width={1000} height={500} />
    </div>
  </div>
</section>
  )
}

export default Steps
