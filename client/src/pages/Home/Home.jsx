import React from "react";
import Navbar from "../../components/ui/Navbar";
import HeaderSection from "./components/Headersection";
import Painsection from "./components/Painsection";
import Timelinesection from "./components/Timelinesection";
import Testimonials from "./components/Testimonials";
import Footer from "../../components/ui/Footer";

function Home() {
  return (
    <div className="w-[100%]">
      <Navbar />
      <HeaderSection />
      <Painsection />
      <Timelinesection />
      {/* <Howwork /> */}
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
