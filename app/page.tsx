import About from "@/components/About";
import Achievement from "@/components/Achievement";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
// import Process from "@/components/Process";
import Products from "@/components/Products";
import Project from "@/components/Project";
import Testimonial from "@/components/Testimonial";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <main className=" w-full h-full">
      <Hero/>
      <Achievement/>
      <About/>
      {/* <Process/> */}
      <Products/>
      <Vision/>
      <Project/>
      <Testimonial/>
      <ContactSection/>
    </main>
  );
}