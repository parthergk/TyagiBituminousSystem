import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative -z-0 w-full h-screen">
      <Image
        alt="main"
        src="/main.png"
        fill
        priority
        className=" object-cover object-center"
      />
      <div className="h-screen absolute text-white w-full flex flex-col justify-end space-y-2.5 sm:space-y-4 px-4 md:px-6 lg:px-8 pb-28 md:pb-10">
        {/* <span className=" text-primary mb-2 italic">WELCOME TO TBS</span> */}
        <h1 className="text-2xl md:text-5xl lg:text-6xl leading-tight">
          RELIABLE <br className=" block sm:hidden"/> <span className=" text-primary italic">BITUMINOUS</span> <br className=" hidden sm:block"/> FOR A STRONGER TOMORROW
        </h1>
        <p className="text-sm md:text-lg max-w-2xl">
          High-quality solutions for roads, <br className=" block sm:hidden"/> roofing, and industries <br className=" hidden sm:block"/> built to
          withstand <br className=" block sm:hidden"/> harsh conditions and deliver lasting performance.
        </p>
      </div>
    </div>
  );
};

export default Hero;
