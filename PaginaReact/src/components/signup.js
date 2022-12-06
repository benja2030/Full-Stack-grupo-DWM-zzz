import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "./assets/logo.png";
import AddUsuario from './mutations/addUsuario';
import TablaUsuario from './queries/tablaUsuario';
import TablaProductos from './queries/tablaProductos';
import GetUsuario from './queries/getUsuario';

export default function Home() {
  return (
    <div className="login">
      <div className="navigation">
        <Container>
          <Row>
            <Col className="d-flex justify-content-start">
              <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
              </Navbar.Brand>
            </Col>
            <Col className="d-flex justify-content-end">
              <p>¿Ya tienes una cuenta? <a href="login">Iniciar sesión</a></p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main">
        <AddUsuario></AddUsuario>
        <Container>
          <div class='row'>
            <TablaUsuario></TablaUsuario>

          </div>
        </Container>
        
        
      </div>
    </div>
  );
};