import { Link } from "react-router-dom";
import "../css/navigation.css";

const Navigation = () => {
  return (
    <div className="navbar">
      {/* <Navbar
        expand="lg"
        style={{ backgroundColor: "rgba(200, 200, 200, 0.6)" }}
      >
        <Container>
          <Navbar.Brand>Bruno Emanuel Lopez Cardena</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Me</Nav.Link>
              <Nav.Link href="#link">Project</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <div>
        <h1 className="titulo">Bruno Lopez</h1>
      </div>
      <div className="enlaces">
        <Link to={"/"}>Home</Link>
        <Link to={"/aboutme"}>About Me </Link>
        <Link to={"/project"}>Projects</Link>
        <Link to={"/contact"}>Contact</Link>
        <h5>Modo oscuro</h5>
      </div>
    </div>
  );
};

export default Navigation;
