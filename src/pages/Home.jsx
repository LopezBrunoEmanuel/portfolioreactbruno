import Footer from "../componentes/Footer";
import MainHome from "../componentes/MainHome";
import Navigation from "../componentes/Navigation";
import imagenclara from "../assets/imagenclara.jpeg";

const Home = () => {
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
      <MainHome />
      <Footer />
    </div>
  );
};

export default Home;
