import About from "@/components/About";
import Achievement from "@/components/Achievement";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Project from "@/components/Project";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <main className=" w-full h-full">
      <NavBar/>
      <Hero/>
      <Achievement/>
      <About/>
      <Process/>
      <Products/>
      <Vision/>
      <Project/>
    </main>
  );
}
