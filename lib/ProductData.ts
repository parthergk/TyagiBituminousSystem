// ProductData.ts

// Type definitions
export interface ProductProperty {
  name: string;
  value: string;
}

export interface ProductAdvantage {
  text: string;
}

export interface ProductApplication {
  text: string;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  description: string;
  properties: ProductProperty[];
  advantages: ProductAdvantage[];
  applications: ProductApplication[];
  usage: string[];
  availability: string[];
  imageUrl?: string;
  additionalInfo?: string;
}

// Product data extracted from the brochure
export const products: Product[] = [
  {
    id: "pmb-emulsion",
    name: "TBS PMB Emulsion",
    shortName: "PMB Emulsion",
    description: "TBS PMB Emulsion is specially designed water-based emulsion with low viscosity and fast setting time that makes it an ideal product for micro surfacing. It is chocolate brown in color and is free flowing liquid at ambient temperature. TBS PMB Emulsion is manufactured strictly as per IS 8887:2018",
    properties: [
      { name: "Residue by evaporation, Min", value: "60" },
      { name: "Penetration at 25⁰C, 0.1 mm/100gm, 5Sec", value: "40-100" },
      { name: "Softening Point in ⁰C, Min", value: "57" },
      { name: "Elastic Recovery, % Min", value: "50" },
      { name: "Mix Time (Sec.), Min", value: "120" }
    ],
    advantages: [
      { text: "No heating required" },
      { text: "Cost efficient" },
      { text: "Easy and uniform spray" },
      { text: "Low temperature curing, fast setting time" },
      { text: "High adhesive properties" },
      { text: "Prevents slippage of structural layers" },
      { text: "Environment friendly" }
    ],
    applications: [
      { text: "TBS PMB Emulsion is best suited for microsurfacing application." }
    ],
    usage: [
      "Use without diluting Bitumen Emulsion with any solvent.",
      "Use at ambient temperature",
      "Roll the Bitumen Emulsion drums up to 5 times before using"
    ],
    availability: [
      "Bulk",
      "HDPE Drums 200 kg"
    ],
    additionalInfo: "PMB Emulsion is mixture of Polymer Modified Bitumen & Soap Solution which is specially design for micro surfacing. Microsurfacing is similar to slurry seal. It consists of the application of a mixture of water, asphalt emulsion, aggregate (very small crushed rock), and chemical additives to an existing asphalt concrete pavement surface. Polymer is commonly added to the asphalt emulsion to provide better mixture properties."
  },
  {
    id: "rs-1",
    name: "TBS RS-1 (Rapid Setting-1)",
    shortName: "RS-1",
    description: "TBS Emulsion RS 1 is specially designed water-based emulsion with low viscosity and fast setting time that makes it an ideal product for spray applications. It is chocolate brown in color and is free flowing liquid at ambient temperature. TBS Emulsion RS 1 is manufactured strictly as per IS 8887:2017",
    properties: [
      { name: "Residue on 600 Micron IS Sieve, % Max", value: "0.05" },
      { name: "Viscosity @ 50⁰C (Saybolt Viscometer), sec", value: "20-100" },
      { name: "Storage Stability after 24 Hour, % max", value: "2" },
      { name: "Binder Residue by Evaporation, % Min", value: "60" },
      { name: "Average Setting time, Minutes", value: "~ 15" }
    ],
    advantages: [
      { text: "No heating required" },
      { text: "Cost efficient" },
      { text: "Easy and uniform spray" },
      { text: "Low temperature curing, fast setting time" },
      { text: "High adhesive properties" },
      { text: "Prevents slippage of structural layers" },
      { text: "Environment friendly" }
    ],
    applications: [
      { text: "TBS Emulsion RS 1 is best suited for tack coat application." },
      { text: "Tack coat with TBS Emulsion RS 1 can be applied on bituminous surface, ages bituminous surface, primed bituminous surfaces and non-bituminous surfaces." }
    ],
    usage: [
      "Use without diluting Bitumen Emulsion with any solvent.",
      "Use at ambient temperature",
      "Roll the Bitumen Emulsion drums up to 5 times before using"
    ],
    availability: [
      "Bulk",
      "HDPE Drums 200 kg"
    ]
  },
  {
    id: "ss-1",
    name: "TBS Emulsion SS 1",
    shortName: "SS 1",
    description: "TBS Emulsion SS 1 is specially designed oil based Bitumen Emulsion with low viscosity, extended setting time and stability with cement that makes it an ideal product for Prime Coat application. It is black in color and is a free flowing liquid at ambient temperature. TBS SS1 is manufactured strictly as per IS 8887:2017.",
    properties: [
      { name: "Residue on 600 Micron IS Sieve, % Max", value: "0.05" },
      { name: "Viscosity @ 25⁰C (Saybolt Viscometer), sec", value: "20-100" },
      { name: "Setting time, hrs", value: "Less than 48" },
      { name: "Binder Residue by Evaporation, % Min", value: "50" },
      { name: "Coagulation at low temperature", value: "NIL" }
    ],
    advantages: [
      { text: "Superior penetration into miniature pores of sub base" },
      { text: "Compatible with Portland cement" },
      { text: "Low temperature curing allows the binder to penetrate into sub base" },
      { text: "Prevent ingress of underground water into the pavements by plugging the capillary voids" },
      { text: "Enhances structural strength by strongly binding loose aggregates" },
      { text: "Easy to apply and hassle free" },
      { text: "Prevent Raveling and Rutting" },
      { text: "Environment friendly" }
    ],
    applications: [
      { text: "TBS Emulsion SS 1 is ideally suited for prime coating on WMM/WBM surfaces and it has the ability to penetrate 8-10mm deep into low porous WMM surface." }
    ],
    usage: [
      "Use without diluting Bitumen Emulsion with any solvent.",
      "Use at ambient temperature",
      "Roll the Bitumen Emulsion drums up to 5 times before using"
    ],
    availability: [
      "Bulk",
      "HDPE Drums 200 kg"
    ]
  },
  {
    id: "ms",
    name: "TBS Emulsion MS",
    shortName: "MS",
    description: "TBS Emulsion MS is specially designed water based Bitumen Emulsion with moderate viscosity and setting time. The medium range of setting time makes it an ideal product for premixing applications. It is chocolate brown in color and free flowing liquid at ambient temperature. TBS Emulsion MS is manufactured strictly as per IS 8887:2017.",
    properties: [
      { name: "Residue on 600 Micron IS Sieve, % Max", value: "0.05" },
      { name: "Viscosity @ 50*C (Saybolt Viscometer), sec", value: "50-300" },
      { name: "Setting time, minutes", value: "30" },
      { name: "Binder Residue by Evaporation, % Min", value: "65" },
      { name: "Coagulation at low temperature", value: "NIL" }
    ],
    advantages: [
      { text: "No heating required" },
      { text: "Cost efficient" },
      { text: "Easy and uniform mixing" },
      { text: "Low temperature curing" },
      { text: "High adhesive properties" },
      { text: "Medium Setting time" },
      { text: "Minimum penetration time for surface repair" },
      { text: "Stable Patch" },
      { text: "Environment friendly" },
      { text: "Bonds well with cool, damp surfaces" }
    ],
    applications: [
      { text: "Pothole Repair/Patch work" },
      { text: "20 mm Pre-Mix Carpet" }
    ],
    usage: [
      "Rate of application of TBS Emulsion MS for preparation of mix is 7% by weight of aggregates.",
      "Use without diluting any solvent.",
      "Use at ambient temperature",
      "Roll the drums up to 5 times before using."
    ],
    availability: [
      "Bulk",
      "HDPE Drums 200 kg"
    ]
  },
  {
    id: "cold-mix",
    name: "TBS Cold Mix Emulsion",
    shortName: "Cold Mix",
    description: "TBS Cold Mix Emulsion is designed for Cold Mix Technology by PMGSY/PWD to be used in Premix Carpet/Bituminous macadam & Seal coat. These emulsions are tailored made & paver made as per quality of aggregates and local site conditions & machinery availability.",
    properties: [
      { name: "Viscosity by Saybolt Furol at 25* C, sec", value: "30 – 150" },
      { name: "Miscibility with water", value: "No coagulation" },
      { name: "Penetration 25 *C", value: "60 – 120" },
      { name: "Ductility 25C, cm, Min", value: "40" },
      { name: "Binder Residue by Evaporation, % Min", value: "63 - 65" }
    ],
    advantages: [
      { text: "Excellent bonding after curing." },
      { text: "Extended breaking" },
      { text: "Easily mixable with aggregates" },
      { text: "Low temperature curing" },
      { text: "Highly adhesive" },
      { text: "Increased strength and Load spreading ability of the surface." },
      { text: "Very effective for extremely cold climates." },
      { text: "Traffic can be allowed within 30 minutes of laying." },
      { text: "Easy to use as little to no heating of material is required." },
      { text: "Good for rehabilitation as no scrapping of existing layer is required." }
    ],
    applications: [
      { text: "Premix Carpet: Premix is a mixture of aggregate, bitumen emulsions and additional water. The Size of aggregates depends on the type of Technology. Recommended rate of application is 6-7 % by the weight of total aggregate." },
      { text: "Bituminous Macadam: Cold mix Bituminous Macadam is a mixture of various grades of aggregate, cement, water & Paver grade Cold mix Emulsion, premixed through a modified Hot-mix plant (DM-30 and above). To be laid upon GSB, the thickness of which depends on the Mix-design. Highly recommended for hilly areas with extremely cold climatic conditions. Recommended rate is 4.5 – 5 % by the weight of aggregate." },
      { text: "Premix Seal Coat: Premix seal coat is a mixture of fine aggregate, Portland cement filler or stone dust, bitumen emulsions and additional water. They may be used to seal wide cracks, fill voids and minor depressions. Recommended rate of application is 10 to 12 Kg per 10m²." }
    ],
    usage: [
      "Use without diluting Bitumen Emulsion with any solvent.",
      "Use at ambient temperature",
      "Roll the Bitumen Emulsion drums up to 5 times before using."
    ],
    availability: [
      "Bulk",
      "HDPE Drums 200 kg"
    ],
    additionalInfo: "The Cold Mix Emulsion can be used for Emulsion Treated Aggregate (ETA) & Cold Mix Bituminous Macadam (CMBM) using paver grade TBS Cold mix Emulsion. It can be applied using Hot Mix Plant or through Manual Execution."
  }
];