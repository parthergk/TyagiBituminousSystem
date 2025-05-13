import About from "@/components/About";
import Achievement from "@/components/Achievement";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className=" w-full h-full">
      <NavBar/>
      <Hero/>
      <Achievement/>
      <About/>
    </main>
  );
}
