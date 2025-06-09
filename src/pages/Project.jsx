import React from "react";
import Navigation from "../componentes/Navigation";
import Mainproject from "../componentes/Mainproject";
import Footer from "../componentes/Footer";
import imagenclara from "../assets/imagenclara.jpeg";

const Project = () => {
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
      <Mainproject />
      <Footer />
    </div>
  );
};

export default Project;
