import React from "react";
import Navbar from "../../components/ui/Navbar";
import HeaderSection from "./Headersection";
import Painsection from "./Painsection";
import Timelinesection from "./Timelinesection";
import Testimonials from "./Testimonials";
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
