import About from "@/modules/@about/components/About";
import Footer from "@/modules/@footer/components/Footer";
import Projects from "@/modules/@projects/components/Projects";
import Service from "@/modules/@service/Service";
import Layout from "@/layouts/Layout";
import ViewMain from "@/views/ViewMain";

export default function Home() {
  return (
    <>
      <ViewMain />
      <Projects />
      <About />
      <Service />
      <Footer />
    </>
  );
}
