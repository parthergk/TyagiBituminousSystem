import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

const Testimonial = () => {
  const reviews = [
    {
      quote:
        "Excellent products and excellent application knowledge.",
      name: "Dhruv Siwach",
      title: "MD RG Buildwell ",
    },
    {
      quote:
        "The entire process—from planning to execution—was smooth and professional. The team really knows their field, and they made everything simple and easy to understand. Their support and attention to detail were impressive. Highly recommend Bituminous for anyone in need of quality bitumen solutions.",
      name: "Ajay Gupta",
      title: "COO SGF Infra",
    },
    {
      quote:
        "We’ve seen a 30% boost in productivity after adopting the TBS products. Incredible value!",
      name: "Amit Joshi",
      title: "MD Amit Joshi Construction",
    }
  ];

  return (
    <div className=" lg:mt-56  flex flex-col justify-center items-center gap-8 px-4 md:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32 overflow-x-hidden">
      <div className="flex-1 flex flex-col items-center space-y-5 text-center md:text-left">
        <span className="text-primary text-sm md:text-base font-semibold tracking-wider uppercase mb-2">
          _ _Testimonials
        </span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-snug text-black">
          Our Valuable Clients
        </h1>
      </div>
        <InfiniteMovingCards items={reviews} />
    </div>
  );
};

export default Testimonial;
