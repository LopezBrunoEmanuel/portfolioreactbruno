import React from "react";
import { Container } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer
        style={{ backgroundColor: "rgba(200, 200, 200, 0.6)" }}
        className="text-dark py-4 mt-5 border-top"
      >
        <Container className="text-center">
          <div className="mb-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark mx-3 fs-4"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark mx-3 fs-4"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark mx-3 fs-4"
            >
              <FaFacebook />
            </a>
          </div>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
