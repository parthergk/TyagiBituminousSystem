import React from "react";
import ValueCard from "./ValueCard";

interface Value{
    title: string
    description: string
    icon: React.ReactNode

}

const Vision = () => {
  const values:Value[] = [
    {
      title: "Customer Focus",
      description:
        "Having superior understanding of customer needs & expectations.",
      icon: <CustomerIcon />,
    },
    {
      title: "Quality Commitment",
      description: "No compromise on quality of the product.",
      icon: <QualityIcon />,
    },
    {
      title: "Innovation & Technology",
      description:
        "Constantly upgrading our technology and continually offering innovative, customized, sustainable & optimal solutions.",
      icon: <InnovationIcon />,
    },
    {
      title: "Growth Mindset",
      description: "Pursuing new growth opportunities.",
      icon: <GrowthIcon />,
    },
    {
      title: "Ethical Business",
      description:
        "Managing our business in ethical, safe and environment friendly manner.",
      icon: <EthicsIcon />,
    },
    {
      title: "People & Society",
      description:
        "Focusing on development & well being of teammates and society.",
      icon: <PeopleIcon />,
    },
  ];

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-16 ">
      <div className="flex flex-col space-y-3 justify-center items-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-snug text-primary text-center">
          Vision & Mission
        </h1>
        <div className="w-24 h-1 bg-primary rounded-full my-4"></div>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl text-center italic">
          To be a preferred partner in the road development sector by providing
          value-driven products and solutions to our customers.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 italic">
          We will create consistent value for our customers through excellence
          in everything we do.
        </p>
      </div>

      {/* Core Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {values.map((value, index) => (
          <ValueCard
            key={index}
            title={value.title}
            description={value.description}
            icon={value.icon}
          />
        ))}
      </div>
    </div>
  );
};

// Simple Icon Components
const CustomerIcon = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm5 2a2 2 0 11-4 0 2 2 0 014 0zm-4 7a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zm10 10v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
  </svg>
);

const QualityIcon = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const InnovationIcon = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zm4.657 2.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zm3 6v-1h4v1a2 2 0 11-4 0zm4-2H8a2 2 0 00-2 2v1a2 2 0 002 2h4a2 2 0 002-2v-1a2 2 0 00-2-2zm2-10a2 2 0 11-4 0 2 2 0 014 0zm2 3a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
);

const GrowthIcon = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
      clipRule="evenodd"
    />
  </svg>
);

const EthicsIcon = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6a6 6 0 100 12 6 6 0 000-12z"
      clipRule="evenodd"
    />
  </svg>
);

const PeopleIcon = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm5 2a2 2 0 11-4 0 2 2 0 014 0zm-4 7a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zm10 10v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
  </svg>
);

export default Vision;
