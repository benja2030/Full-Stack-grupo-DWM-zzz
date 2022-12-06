import { useState } from "react";
import { Row, Col, Button, ListGroup, ButtonGroup } from "react-bootstrap";

const CartProduct = ({ img, name, description, price, deleteProduct }) => {
  const [contador, setContador] = useState(1);

  const reducirCantidad = () => {
    if (contador === 0) {
      return;
    }
    setContador(contador - 1);
  };

  return (
    <div
      className="d-flex justify-content-start"
      style={{ margin: "4px", padding: "3px" }}
    >
      <div style={{ padding: "6px" }} className="card">
        <div className="row">
          <div className="col-md-2">
            <img src={img} alt={name} className="img-fluid" />
          </div>
          <div className="col-md-10">
            <h3
              style={{ fontWeight: "bold" }}
              className="card-title mt-2 mb-0 text-black"
            >
              {name}
            </h3>
            <Row>
              <Col style={{ color: "black" }}>
                <ListGroup.Item style={{ paddingBottom: "1px" }}>
                  categoria
                </ListGroup.Item>
                <ListGroup.Item
                  className="lh-1"
                  style={{ fontSize: "12px", paddingBottom: "1px" }}
                >
                  {description}
                </ListGroup.Item>
              </Col>
              <Col style={{ paddingRight: "5%", color: "black" }}>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <ListGroup.Item>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                      {price}
                    </p>
                  </ListGroup.Item>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <ListGroup.Item
                    className="mt-1 mb-1 text-black"
                    style={{ fontSize: "12px", fontWeight: "lighter" }}
                  >
                    cantidad:
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <ButtonGroup size="sm">
                      <Button onClick={reducirCantidad}>-</Button>
                      <Button variant="info">{contador}</Button>
                      <Button onClick={() => setContador(contador + 1)}>
                        +
                      </Button>
                    </ButtonGroup>
                  </ListGroup.Item>
                  <Button onClick={deleteProduct}>Eliminar</Button>
                  {/* <a href="carro" className="text-reset" onClick={deleteProduct}>
                    eliminar
                  </a> */}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
