// app/about/page.tsx (Next.js with Tailwind CSS)

import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
            <section className="relative bg-cover bg-center bg-no-repeat px-4 md:px-6 lg:px-8 py-16 text-center text-white" style={{ backgroundImage: 'url(/main.png)' }}>
        <div className="p-6 md:p-12 lg:p-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About Tyagi <span className=" text-primary"> Bituminous </span> System
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto italic">
            Leading manufacturer of bitumen emulsions, committed to quality, innovation, and infrastructure growth across India.
          </p>
        </div>
      </section>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-4 md:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32">
            <div className="flex-1 flex flex-col space-y-5 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-snug text-black">
                How Road Construction <br/> Shapes{" "}
                <span className="text-primary italic">Our Cities</span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700 text-start">
                Tyagi Bituminous System is a new era manufacturing plant based in
                Panipat (Haryana). We have a complete automated plant with latest
                technology available in the world. As of today, we are proud to be a
                largest manufacturer of Bitumen Emulsion in Haryana Region with a
                production capacity of more than 100 Metric ton per day. We market
                our Bitumen Emulsion under Trademark `&quot;`TBS EMULSION`&quot;`. This is just a
                beginning — there is a lot more to go, and we are very positive given
                our team commitment.
              </p>
            </div>
      
            {/* Image Section */}
            <div className="flex-1 flex justify-center md:justify-end relative">
              <Image
                alt="person"
                src="/main.png"
                width={400}
                height={450}
                className="w-full max-w-xs sm:max-w-sm md:max-w-lg h-auto object-contain rounded-sm shadow-2xl "
              />
              <div className=" text-base absolute -bottom-5 left-20 bg-primary text-white px-5 py-2 rounded-sm shadow-2xl">Established in 2021</div>
            </div>
          </div>

      {/* Manufacturing Unit Parallax Gallery */}
      <section className="relative px-4 md:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32 overflow-hidden">
        <h2 className="text-2xl font-semibold mb-10 text-primary text-center">Our Manufacturing Unit</h2>
        <div className="relative space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-speed="0.3">
            <Image src="/main.png" alt="Manufacturing Equipment 1" width={600} height={400} className="rounded-lg object-cover w-full h-auto transition-transform duration-500 will-change-transform" />
            <Image src="/main.png" alt="Manufacturing Equipment 2" width={600} height={400} className="rounded-lg object-cover w-full h-auto transition-transform duration-500 will-change-transform" />
            <Image src="/main.png" alt="Barrel Stock" width={600} height={400} className="rounded-lg object-cover w-full h-auto transition-transform duration-500 will-change-transform" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-speed="0.5">
            <Image src="/main.png" alt="Lab Setup" width={600} height={400} className="rounded-lg object-cover w-full h-auto transition-transform duration-500 will-change-transform" />
            <Image src="/main.png" alt="Mixer Unit" width={600} height={400} className="rounded-lg object-cover w-full h-auto transition-transform duration-500 will-change-transform" />
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-4 md:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32">
        <h2 className="text-2xl font-semibold mb-10 text-primary">Certification</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/main.png"
              alt="Official ISO Certificate"
              width={500}
              height={350}
              className="rounded-lg object-cover shadow-lg w-full h-auto"
            />
          </div>
          <div className=" self-start">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">ISO 9001:2015 Certified</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Tyagi Bituminous System has been awarded ISO 9001:2015 certification for maintaining high standards in quality management. Our products are rigorously tested to meet national and international standards. This certification reflects our ongoing commitment to delivering reliable and consistent quality to our customers across the road development and infrastructure industry.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
