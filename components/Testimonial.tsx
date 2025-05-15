import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

const Testimonial = () => {
  const reviews = [
    {
      quote:
        "This platform transformed the way we manage projects. It's fast, efficient, and user-friendly.",
      name: "Aarav Sharma",
      title: "Project Manager at InfraBuild",
    },
    {
      quote:
        "The support team is outstanding and the interface is super intuitive. Highly recommend it.",
      name: "Meera Iyer",
      title: "CTO at UrbanGrid",
    },
    {
      quote:
        "We’ve seen a 30% boost in productivity after adopting this tool. Incredible value!",
      name: "Rohan Mehta",
      title: "Operations Lead at Construx",
    },
    {
      quote:
        "Our entire workflow became smoother. It's like this was built exactly for our needs.",
      name: "Divya Kapoor",
      title: "Civil Engineer at MegaStructures Inc.",
    },
    {
      quote:
        "Excellent features, fast performance, and great UX. This is a must-have tool for any team.",
      name: "Siddharth Verma",
      title: "Tech Lead at BuildTech",
    },
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
