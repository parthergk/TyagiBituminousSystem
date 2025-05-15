import React from "react";
import ProductCard from "./ProductCard";
interface Product {
  id: string;
  name: string;
  des: string;
  img: string;
}

const Products = () => {
  const products: Product[] = [
    {
      id: "pmb-emulsion",
      name: "TBS PMB Emulsion",
      des: "Ideal for microsurfacing with high adhesion and fast curing properties.",
      img: "/main.png",
    },
    {
      id: "rs-1",
      name: "TBS RS-1",
      des: "Designed for rapid setting spray applications such as tack coats.",
      img: "/main.png",
    },
    {
      id: "ss-1",
      name: "TBS SS-1",
      des: "Slow setting emulsion suitable for prime coating on WMM/WBM surfaces.",
      img: "/main.png",
    },
    {
      id: "ms",
      name: "TBS MS",
      des: "Perfect for pothole repair and patch works with medium setting time.",
      img: "/main.png",
    },
    {
      id: "cold-mix",
      name: "TBS Cold Mix Emulsion",
      des: "Specially made for cold mix applications, even in extreme climates.",
      img: "/main.png",
    },
  ];
  return (
    <div className="px-4 md:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32">
      <div className="flex flex-col space-y-5 text-center">
        <span className="text-primary text-sm md:text-base font-semibold tracking-wider uppercase mb-2">
          _ _Our Products
        </span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 leading-snug text-black">
          Our Awesome Products
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            des={item.des}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
