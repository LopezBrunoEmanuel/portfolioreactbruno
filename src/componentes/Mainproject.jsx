import { Card, Container, Row, Col } from "react-bootstrap";

const Mainproject = () => {
  return (
    <div>
      <Container className="my-5">
        <Row className="g-4">
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="/img1.jpg" />
              <Card.Body>
                <Card.Title>Proyecto 1</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis ullam saepe harum labore unde accusantium omnis
                  itaque sapiente officiis, hic vero possimus molestiae, dolorem
                  in fugiat maxime nostrum minus impedit?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="/img2.jpg" />
              <Card.Body>
                <Card.Title>Proyecto 2</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis ullam saepe harum labore unde accusantium omnis
                  itaque sapiente officiis, hic vero possimus molestiae, dolorem
                  in fugiat maxime nostrum minus impedit?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="/img3.jpg" />
              <Card.Body>
                <Card.Title>Proyecto 3</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis ullam saepe harum labore unde accusantium omnis
                  itaque sapiente officiis, hic vero possimus molestiae, dolorem
                  in fugiat maxime nostrum minus impedit?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="/img4.jpg" />
              <Card.Body>
                <Card.Title>Proyecto 4</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis ullam saepe harum labore unde accusantium omnis
                  itaque sapiente officiis, hic vero possimus molestiae, dolorem
                  in fugiat maxime nostrum minus impedit?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mainproject;
