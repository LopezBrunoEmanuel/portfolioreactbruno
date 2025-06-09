import Navigation from "./Navigation";
import Footer from "./Footer";
import { Card } from "react-bootstrap";

const MainHome = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "40px", color: "black" }}>
        Bruno Emanuel Lopez Cardena
      </h1>

      <div
        className="d-flex justify-content-center align-items-center my-5"
        style={{ minHeight: "60vh" }}
      >
        <Card
          style={{
            width: "40rem",
            backgroundColor: "rgba(33, 23, 28, 0.14)",
          }}
          className="shadow-sm"
        >
          <Card.Body>
            <Card.Title className="text-center">Fullstack Developer</Card.Title>
            <Card.Text
              className="text-center"
              style={{
                fontSize: "1.1rem",
                fontFamily: "'Segoe UI', sans-serif",
                lineHeight: "1.9",
              }}
            >
              Soy Bruno , de San Miguel de Tucumán, Argentina. Soy estudiante de
              programación en la Universidad Tecnológica Nacional. Tengo
              conocimientos en el lenguaje C#, .NET, SQL server, también en
              HTML, CSS, Bootstrap, JavaScript y actualmente estoy aprendiendo
              React.Js . Tengo un nivel de ingles avanzado. Soy una persona
              responsable, ordenada y que le gusta trabajar en equipo. Estoy
              dispuesto a seguir aprendiendo y formándome en los conocimientos
              ya adquiridos como también en nuevos aprendizajes, me gusta
              aprender constantemente y crecer día a día en lo que respecta al
              mundo de la tecnología. Mi objetivo es seguir aprendiendo como así
              también formar parte de una empresa donde pueda aplicar todo lo
              aprendido.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MainHome;
