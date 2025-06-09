import { Card, Badge } from "react-bootstrap";

// const Mainaboutme = () => {
//   const info = {
//     nombre: "Bruno Emanuel Lopez Cardena",
//     edad: 32,
//     Skill: ["C#", "SqlServer", "Javascript", "React"],
//     imagen: "/perfil.jpg",
//     Hobbies: "Basquet",
//   };

//   return (
//     <div>
//       <Card style={{ width: "20rem" }}>
//         <Card.Img variant="top" src="/perfil.jpg" />
//         <Card.Body>
//           <Card.Title>{info.nombre}</Card.Title>
//           <Card.Text>Edad: {info.edad}</Card.Text>
//           <Card.Text> Skil: {}</Card.Text>
//           <Card.Text>Hobbies: {info.Hobbies}</Card.Text>
//         </Card.Body>
//       </Card>
const Mainaboutme = () => {
  const info = {
    nombre: "Bruno Emanuel Lopez Cardena",
    edad: 32,
    Skill: ["C#", "SqlServer", "Javascript", "React"],
    imagen: "/perfil.jpg",
    Hobbies: "Básquet",
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card
        style={{
          width: "12rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          borderRadius: "15px",
        }}
      >
        <Card.Img
          variant="top"
          src={info.imagen}
          style={{
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            borderRadius: "5%",
          }}
        />
        <Card.Body>
          <Card.Title className="text-center">{info.nombre}</Card.Title>
          <Card.Text className="text-center">Edad: {info.edad}</Card.Text>
          <Card.Text className="text-center">
            <strong>Skills:</strong>
            <br />
            <div className="d-flex justify-content-center flex-wrap gap-2 mt-2">
              {info.Skill.map((skill, idx) => (
                <Badge key={idx} bg="secondary" pill>
                  {skill}
                </Badge>
              ))}
            </div>
          </Card.Text>
          <Card.Text className="text-center">
            <strong>Hobbies:</strong> {info.Hobbies}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Mainaboutme;
