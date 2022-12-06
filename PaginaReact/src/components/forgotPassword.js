
import {Container, Row, Col, Navbar, Form, Button} from "react-bootstrap";
import logo from "./assets/logo.png";

const ForgotPassword = () => {
  return (
    <div className="forgotpassword">
      <div className="navigation">
        <Container>
          <Row>
            <Col>
              <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
              </Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main">
        <div className="d-flex flex-column col-md-5 mx-auto">
          <h1>Restablecer su contraseña</h1>
          <div>
            Ingrese la dirección de correo electrónico verificada de su cuenta y
            le enviaremos un enlace para restablecer la contraseña
          </div>
          <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
              />
            </Form.Group>
          </div>
          <div>
            <Button variant="success">Recuperar contraseña</Button>
          </div>
          <Form></Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
