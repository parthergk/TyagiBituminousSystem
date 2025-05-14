import React from "react";
import ProductCard from "./ProductCard";
interface Product{
    name: string,
    des: string,
    img: string
}

const Products = () => {
  const products: Product[] = [
    {
      name: "TBS PMB Emulsion",
      des: "Ideal for microsurfacing with high adhesion and fast curing properties.",
      img: "/main.png",
    },
    {
      name: "TBS RS-1",
      des: "Designed for rapid setting spray applications such as tack coats.",
      img: "/main.png",
    },
    {
      name: "TBS SS-1",
      des: "Slow setting emulsion suitable for prime coating on WMM/WBM surfaces.",
      img: "/main.png",
    },
    {
      name: "TBS MS",
      des: "Perfect for pothole repair and patch works with medium setting time.",
      img: "/main.png",
    },
    {
      name: "TBS Cold Mix Emulsion",
      des: "Specially made for cold mix applications, even in extreme climates.",
      img: "/main.png",
    },
  ];
  return (
    <div className="px-4 md:px-6 lg:px-8 py-10">
      <div className="flex flex-col space-y-5 text-center">
        <span className="text-primary text-xl md:text-2xl">_ _About us</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-snug text-black">
          Our Awesome Products
        </h1>
      </div>
      {/* Products */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
  {products.map(item => (
    <ProductCard
      key={item.name}
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
