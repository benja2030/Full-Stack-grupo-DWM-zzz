import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
  BsMap,
  BsInfoCircle,
} from "react-icons/bs";
import {
  AiOutlineSetting,
  AiOutlineTeam,
  AiOutlineContacts,
  AiOutlinePhone,
} from "react-icons/ai";

import webpay from "./assets/webpay.png";

export default function Footer() {
  return (
    <Card className="text-center text-black">
      <Card.Header>Footer</Card.Header>
      <Card.Body>
        <Card.Title>Acerca de</Card.Title>
        <Container>
          <Row style={{ fontSize: "40px", fontWeight: "bold" }}>
            <Col>Fukusuke</Col>
            <Col></Col>
            <Col></Col>
          </Row>

          <Row style={{ fontSize: "20px", fontWeight: "bold" }}>
            <Col>LINKS</Col>
            <Col>CONTACTO</Col>
            <Col>REDES</Col>
          </Row>
          <Row>
            <Col>
              <a
                style={{ paddingBottom: "5px" }}
                className="nav-link active"
                href="about"
              >
                {" "}
                <BsInfoCircle /> About Us{" "}
              </a>
              <a
                style={{ paddingBottom: "5px" }}
                className="nav-link active"
                href="/"
              >
                {" "}
                <AiOutlineSetting /> Support{" "}
              </a>
              <a
                style={{ paddingBottom: "5px" }}
                className="nav-link active"
                href="/"
              >
                <AiOutlineTeam /> Our Team
              </a>
              <a
                style={{ paddingBottom: "5px" }}
                className="nav-link active"
                href="contact"
              >
                <AiOutlineContacts /> Contact Us{" "}
              </a>
            </Col>
            <Col>
              <ListGroup.Item style={{ paddingBottom: "5px" }}>
                {" "}
                <AiOutlinePhone /> +56 9 2279 6608{" "}
              </ListGroup.Item>
              <ListGroup.Item style={{ paddingBottom: "5px" }}>
                {" "}
                <AiOutlinePhone /> +56 9 8692 8402{" "}
              </ListGroup.Item>
              <ListGroup.Item style={{ paddingBottom: "5px" }}>
                {" "}
                <AiOutlinePhone /> +56 9 5644 2907{" "}
              </ListGroup.Item>
              <ListGroup.Item style={{ paddingBottom: "5px" }}>
                {" "}
                <AiOutlinePhone /> +56 9 2279 6608{" "}
              </ListGroup.Item>
            </Col>
            <Col>
              <a
                style={{ paddingBottom: "5px" }}
                className="nav-link active"
                href="/"
              >
                {" "}
                <BsWhatsapp /> Whatsapp{" "}
              </a>
              <a
                style={{ paddingBottom: "5px" }}
                className="nav-link active"
                href="/"
              >
                {" "}
                <BsInstagram /> Instagram{" "}
              </a>
              <a
                style={{ paddingBottom: "5px" }}
                className="nav-link active"
                href="/"
              >
                <BsFacebook /> Facebook
              </a>
              <a
                style={{ paddingBottom: "5px" }}
                className="nav-link active"
                href="/"
              >
                <BsMap /> Map{" "}
              </a>
            </Col>
          </Row>
          <Row
            style={{ paddingBottom: "5px", paddingTop: "5px" }}
            className="align-items-center"
          >
            <Col></Col>
            <Col></Col>
            <Col>
              <Button style={{ marginRight: "3px", marginBottom: "3px" }}>
                <BsInstagram />
              </Button>
              <Button style={{ marginRight: "3px", marginBottom: "3px" }}>
                <BsFacebook />
              </Button>
              <Button style={{ marginRight: "3px", marginBottom: "3px" }}>
                <BsWhatsapp />
              </Button>
              <Button style={{ marginRight: "3px", marginBottom: "3px" }}>
                <BsMap />
              </Button>
            </Col>
          </Row>

          <Row>
            <Col> </Col>
            <Col>
              <Container style={{ maring: 40 }}>
                <img
                  className="img-fluid d-block w-80"
                  src={webpay}
                  alt="Second slide"
                />
              </Container>
            </Col>
            <Col> </Col>
          </Row>
        </Container>
        <Button variant="primary" href="signup">
          Registrarse
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        copyright © 2022 all rights reserved
      </Card.Footer>
    </Card>
  );
};
