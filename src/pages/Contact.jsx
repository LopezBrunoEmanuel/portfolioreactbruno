import Navigation from "../componentes/Navigation";
import Maincontac from "../componentes/Maincontac";
import Footer from "../componentes/Footer";
import imagenclara from "../assets/imagenclara.jpeg";

const contact = () => {
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
      <Maincontac />
      <Footer />
    </div>
  );
};

export default contact;
