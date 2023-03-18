import Image, { ImageLoaderProps } from "next/image";

const AboutUs = () => {
    const imageLoader = ({ src }: ImageLoaderProps) => {
        return src;
    }

        return (
                <section className="pb-20 text-gray-600 body-font">
                    <div className="container flex flex-wrap px-5 py-24 mx-auto">
                        <div className="flex flex-wrap content-start mt-auto mb-auto -mx-4 lg:w-1/2 sm:w-2/3 sm:pr-10">
                            <div className="w-full px-4 mb-6 sm:p-4">
                                <h1 className="mb-6 text-4xl font-medium text-gray-900 title-font">Želite saznati nešto više o Nama?</h1>
                            <div className="text-lg leading-relaxed">HomeLab pojednostavljuje vaš život čineći vaš dom pametnim i potpuno automatizovanim. Naš centralni kontrolni sistem, HomeLab Hub, lako upravlja svim vašim pametnim uređajima.<br/><br/>
                            Nudimo raspon pametnih uređaja koji se besprijekorno integrišu sa HomeLab Hub-om. Naše pristupačne rješenja čine pametni dom dostupnim svima.<br/><br/>
                                <span className="font-semibold">Pridružite se revoluciji pametnog doma danas sa HomeLab-om.</span></div>
                            </div>
                        </div>
                        <div className="w-full mt-6 overflow-hidden rounded-lg lg:w-1/2 sm:w-1/3 sm:mt-0">
                            <Image loader={imageLoader} className="object-cover object-center w-full h-full" alt="hero image smart home" src={`images/Landing/aboutus.png`} width={600} height={300} />
                        </div>
                    </div>
                </section>
        )
    }


export default AboutUs
