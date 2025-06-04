import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-4 md:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32">
      <div className="flex-1 flex flex-col space-y-5 text-center md:text-left">
        <span className="text-primary text-sm md:text-base font-semibold tracking-wider uppercase mb-2">_ _About us</span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-snug text-black">
          TYAGI BITUMINOUS {" "} <span className="text-primary italic">SYSTEM</span>
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
          src="/img/about.jpg"
          width={400}
          height={450}
          className="w-full h-full max-w-xs sm:max-w-sm md:max-w-lg md:max-h-96 object-contain rounded-sm shadow-2xl "
        />
        <div className=" text-base absolute -bottom-5 left-20 bg-primary text-white px-5 py-2 rounded-sm shadow-2xl">Established in 2021</div>
      </div>
    </div>
  );
};

export default About;
