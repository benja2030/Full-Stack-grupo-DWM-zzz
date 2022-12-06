import {Container, Row, Col, Navbar, Button, Nav} from "react-bootstrap";
import logo from "./assets/logo.png";

export default function Signup() {
    return (
      <div className="navigation">
        <Container>
          <Row className="justify-content-md-center align-items-center">
            <Col md="auto">
              <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
              </Navbar.Brand>
            </Col>
            <Col>
              <Nav className="justify-content-md-center">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="menu">Menu</Nav.Link>
                <Nav.Link href="contact">Contacto</Nav.Link>
                <Nav.Link href="about">Acerca</Nav.Link>
              </Nav>
            </Col>
            <Col md="auto">
              <Button href="login" variant="dark">
                Iniciar sesión
              </Button>
              <Button className="mx-2" href="signup" >
                Registrarse
              </Button>
              <Button href="carro" variant="dark"> Carrito </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
