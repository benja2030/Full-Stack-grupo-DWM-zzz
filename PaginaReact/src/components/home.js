import React from 'react';
import Navigation from "./navigation";

import Footer from "./footer";
import { Row, Col, Carousel } from "react-bootstrap";
import uno from "./assets/carrousel_1.jpg";
import dos from "./assets/carrousel_2.jpg";
import tres from "./assets/carrousel_3.jpg";



import ProductoDestacado from "./queries/productoDestacado";

import {useQuery, gql} from '@apollo/client';

const GET_PRODUCTOS = gql`
    query Query{
        getProductos {
        llave
        nombre
        precio
        imagen
        descripcion
        }
    }
`



export default function Home() {
  const {data, loading, error} = useQuery(GET_PRODUCTOS);

  if(loading) return (<p>Cargando...</p>);
  if(error) return (<p>ERROR</p>);
  

  return (
    <>
      <Navigation cartProducts={[]}/>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={uno} alt="Second slide" />

            <Carousel.Caption>
              <h3>.</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={dos} alt="Second slide" />

            <Carousel.Caption>
              <h3>.</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={tres} alt="Third slide" />

            <Carousel.Caption>
              <h3>.</h3>
              <p>

              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="contenedor-uno">
        <Row className="gradientes">
          <Col sm={12} style={{ padding: "1rem" }}>
            <b className="titulo-prueba"> PRODUCTO MÁS VENDIDO </b>
          </Col>
          <Col sm={12} style={{ padding: "1rem" }}>
            <b className="titulo-prueba"> </b>
          </Col>
        </Row>

        <Row style={{ padding: "1rem" }}>
            <ProductoDestacado></ProductoDestacado>
        </Row>
      </div>

      <Footer />
    </>
  );
}