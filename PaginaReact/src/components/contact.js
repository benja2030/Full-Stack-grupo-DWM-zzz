import { Col, Row, Container, Stack, Form, Button } from "react-bootstrap";
import Footer from "./footer";
import Navigation from "./navigation";
import { BsWhatsapp, BsInstagram, BsFacebook, BsMap } from "react-icons/bs";
import izq from "./assets/MapContact.jpg";

export default function Contact(){
    return (
        <div>
        <Navigation />
        <div className="contenedor-contacto">
            <Row>
            <Col>
                <img
                src={izq}
                alt="img"
                className="img-responsive"
                width="120%"
                height="100%"
                ></img>
            </Col>
    
            <Col style={{ backgroundColor: "rgb(50, 1, 3)" }}>
                <Col style={{ padding: "6%" }}>
                <Container
                    style={{
                    paddingTop: "5%",
                    paddingBottom: "5%",
                    }}
                >
                    <h2 className="titulo-2">Let's talk</h2>
                    <Stack
                    style={{ paddingTop: "5%", paddingBottom: "5%" }}
                    gap={1}
                    >
                    <h4> Redes sociales: </h4>
                    <a href="/">
                        {" "}
                        <BsWhatsapp /> Whatsapp{" "}
                    </a>
                    
                    <ul>
                        <li> +56 9 2279 6608</li>
                        <li> +56 9 8692 8402</li>
                        <li> +56 9 5644 2907</li>
                    </ul>
                    <a href="/">
                        {" "}
                        <BsInstagram /> Instagram{" "}
                    </a>
                    <ul>
                        <li> @fukusukesushi.M</li>
                    </ul>
                    <a href="/">
                        {" "}
                        <BsFacebook /> Facebook{" "}
                    </a>
                    <ul>
                        <li> @fukusukesushi.M</li>
                    </ul>
                    <a href="/">
                        {" "}
                        <BsMap /> Locación{" "}
                    </a>
                    <ul>
                        <li> Av. Pajaritos 1001, Maipu.</li>
                    </ul>
                    </Stack>
                    <Stack gap={1}>
                    <h5>o suscribete con tu correo! </h5>
                    </Stack>
                    <Stack direction="horizontal" gap={2}>
                    <Form.Control
                        className="me-auto"
                        placeholder="Correo electronico aqui..."
                    />
                    <Button variant="primary">Subscribirse</Button>
                    <div className="vr" />
                    <Button variant="light">Quitar</Button>
                    </Stack>
                    <Stack
                    style={{ paddingTop: "8%", paddingBottom: "5%" }}
                    gap={2}
                    className="col-md-5 mx-auto"
                    >
                    <a type="button" href="/" className="btn btn-outline-primary">Inicio</a>
                    <a type="button" href="signup" className="btn btn-outline-danger">Registrarse</a>
                    </Stack>
                </Container>
    
                <Container>
                    <p className="text-ligth">IMPSUM</p>
                </Container>
                </Col>
            </Col>
            </Row>
        </div>
        
        <Footer />
        </div>
        
    );
};