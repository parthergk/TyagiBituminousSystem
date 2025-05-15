import React from "react";
import { ArrowDownToLine } from "lucide-react";

const ProcessFlow = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
      {/* Materials section */}
      <div className="flex justify-between w-full gap-6 mb-8">
        {/* Bitumen side */}
        <div className="w-64 p-4 font-medium text-sm md:text-base lg:text-lg leading-relaxed text-gray-700 border-b-2 border-primary text-center">
          <h3>Bitumen VG 30</h3>
          <p>+</p>
          <p>Polymer (SBS)</p>
          <p>Powder</p>
        </div>

        {/* Soap solution side */}
        <div className="w-64 p-4 font-medium text-sm md:text-base lg:text-lg leading-relaxed text-gray-700 border-b-2 border-primary text-center">
          <h3>Soap</h3>
          <p>Solution</p>
          <p>+</p>
          <p>Additive</p>
        </div>
      </div>

      {/* Flow arrows from materials */}
      <div className="w-full flex justify-between px-10 sm:px-16 md:px-24 mb-12">
        <ArrowDownToLine className="text-orange-500 animate-bounce" size={32} />
        <ArrowDownToLine className="text-orange-500 animate-bounce" size={32} />
      </div>

      {/* Colloidal Mill */}
      <div className="w-64 p-4 font-medium text-sm md:text-base lg:text-lg leading-relaxed text-primary border-2 border-primary text-center mb-8">
        <h3>Colloidal</h3>
        <p>Mill</p>
      </div>

      {/* Arrow from mill to emulsion */}
      <div className="mb-8">
        <ArrowDownToLine className="text-orange-500 animate-bounce" size={32} />
      </div>

      {/* PMB Emulsion */}
      <div className="w-64 p-4 font-medium text-sm md:text-base lg:text-lg leading-relaxed text-gray-700 border-b-2 border-primary text-center mb-8">
        <h3>PMB</h3>
        <p>EMULSION</p>
      </div>

      {/* Arrow from emulsion to testing */}
      <div className="mb-8">
        <ArrowDownToLine className="text-orange-500 animate-bounce" size={32} />
      </div>

      {/* Quality Testing */}
      <div className="w-64 p-4 text-sm md:text-base lg:text-lg leading-relaxed text-gray-700 border-b-2 border-primary text-center">
        <h3 className="font-bold">In House Test</h3>
        <div className=" text-sm mt-2">
          <p>Viscosity Residue</p>
          <p>Softening Point</p>
          <p>Penetration</p>
          <p>Elastic Recovery</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;