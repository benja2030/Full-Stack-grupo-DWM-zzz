import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

import React from 'react';
import {useQuery, gql} from '@apollo/client';

const GET_PRODUCTO = gql`
    query getProducto(
        $id: ID!
    ){
        getProducto(id: $id){
            id
            nombre
            precio
            imagen
            descripcion
        }
    }
`;

const ProductoDestacado = () => {
  const {loading, error, data} = useQuery(GET_PRODUCTO, {
    variables: { id: '638e46bc2fad52e259159dcc' },
  });
  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error</p>

  return (
    <div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-sm-6">
            <Card
              className="text-black"
              style={{ width: "36rem", padding: "1%", marginBottom: "10px" }}
            >
              <Card.Img
                variant="top"
                src={data.getProducto.imagen}
              />
              <Card.Body>
                <Card.Title>{data.getProducto.nombre}</Card.Title>
                <Card.Text>Roll</Card.Text>

                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    {data.getProducto.descripcion}
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-center">
                    <b>{data.getProducto.precio}</b>
                  </ListGroup.Item>
                </ListGroup>

              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoDestacado;
