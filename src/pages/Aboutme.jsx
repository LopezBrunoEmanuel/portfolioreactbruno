import React from "react";
import Navigation from "../componentes/Navigation";
import Mainaboutme from "../componentes/Mainaboutme";
import Footer from "../componentes/Footer";
import imagenclara from "../assets/imagenclara.jpeg";

const Aboutme = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${imagenclara})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navigation />
      <Mainaboutme />
      <Footer />
    </div>
  );
};

export default Aboutme;
