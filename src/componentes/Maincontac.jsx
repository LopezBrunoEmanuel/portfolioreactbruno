import { Form } from "react-bootstrap";
const Maincontac = () => {
  return (
    <div>
      {/* <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form> */}
      <div
        style={{
          maxWidth: "500px",
          margin: "50px auto",
          padding: "30px",
          borderRadius: "15px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}
        >
          Contacto
        </h2>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{ fontWeight: "bold", color: "#555" }}>
              Correo electrónico
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="nombre@ejemplo.com"
              style={{
                borderRadius: "8px",
                padding: "10px",
                fontSize: "1rem",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ fontWeight: "bold", color: "#555" }}>
              Mensaje
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Escribí tu mensaje aquí..."
              style={{
                borderRadius: "8px",
                padding: "10px",
                fontSize: "1rem",
              }}
            />
          </Form.Group>

          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Enviar
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Maincontac;
