import { storeDetails } from "@/lib/constants";
import Link from "next/link"

const Hero = () => {
  return (
    <section className="max-md:mt-20 w-full flex flex-col justify-center
     items-center h-screen max-w-[1500px] xs:max-h-[450px] sm:max-h-[450px] md:max-h-[550px] 
     lg:max-h-[700px] xl:max-h-[800px] bg-cover bg-center" 
     style={{ backgroundImage: `url(${storeDetails.heroImg.src})` }}>
      <div className="max-sm:ml-10 ml-16  mr-auto w-3/5 flex flex-col justify-center items-center z-40">
        <h1 className="justify-self-start lg:text-heading0-bold md:text-heading1-bold text-heading2-bold text-black bg-white py-1 px-2 rounded-lg">{storeDetails.heroTitle}</h1>
        <p className="mr-auto lg:text-heading2-bold md:text-heading3-bold text-body-bold text-left text-black mb-8 max-w-lg mt-4 bg-white py-1 px-2 rounded-lg">
          {storeDetails.heroSubTitle}
        </p>
        <Link
          className="text-body-bold mr-auto inline-flex h-12 items-center justify-center rounded-md bg-black px-8 text-lg font-medium text-white shadow transition-colors hover:bg-gray-100 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          href="/products"
        >
          Shop Now
        </Link>
      </div>
    </section>
  )
}

export default Hero;