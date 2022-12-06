import {
    Row,
    Col,
    Card,
    Button,
    InputGroup,
    Form,
    ListGroup,
  } from "react-bootstrap";
  import Footer from "./footer";
  import Navigation from "./navigation";
  import CartProduct from "./cartProduct";
  import webpay from "./assets/webpay.png";
  import CardHeader from "react-bootstrap/esm/CardHeader";
  import carro from "../mocking/carro";
  import { useState } from "react";
  
  function Carro() {
    const [cartProducts, setCartProducts] = useState(carro);
  
    console.log(cartProducts);
    const handleDelete = (product) => {
      const filteredProducts = cartProducts.filter(
        (cartProduct) => cartProduct !== product
      );
      setCartProducts(filteredProducts);
    };
  
    return (
      <>
        <Navigation carrito={cartProducts}/>
        <div className="contenedor-uno">
          <Row>
            <Col>
              {cartProducts.map((cartProduct) => (
                <CartProduct
                  key={cartProduct.id}
                  name={cartProduct.name}
                  price={cartProduct.price}
                  img={cartProduct.img}
                  description={cartProduct.description}
                  deleteProduct={() => handleDelete(cartProduct)}
                />
              ))}
            </Col>
            <Col className="rcorners3" style={{ margin: "4px", padding: "40px" }}>
              <div className="rcorners2 checkout">
                <Card style={{ width: "27rem" }}>
                  <CardHeader>Detalles Compra</CardHeader>
                  <Card.Body>
                    <Card.Title>
                      <div>
                        <Row>
                          <Col>Total</Col>
                          <Col style={{ textAlign: "right" }}>$ 0.00</Col>
                        </Row>
                      </div>
                    </Card.Title>
                    <div>
                      <Row>
                        <Col>Subtotal:</Col>
                        <Col style={{ textAlign: "right" }}>$ 0.00</Col>
                      </Row>
                    </div>
                  </Card.Body>
                  <ListGroup className="list-group-flush mb-5">
                    <ListGroup.Item>
                      <InputGroup className="mb-0">
                        <Form.Select aria-label="Default select example">
                          <option>Despacho standar (gratis)</option>
                          <option value="1">Despacho 1</option>
                          <option value="2">Despacho 2</option>
                          <option value="3">Despacho 3</option>
                        </Form.Select>
                      </InputGroup>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <div>
                        <Row>
                          <Col>Cantidad total productos:</Col>
                          <Col style={{ textAlign: "right" }}>0</Col>
                        </Row>
                      </div>
  
                      <div className="d-grid gap-1 mt-5 mb-4">
                        <Button variant="primary" size="sm" active>
                          Confirmar Pago
                        </Button>{" "}
                        <Button variant="danger" size="sm" active>
                          Cancelar
                        </Button>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item>
                      Metodo Pago:
                      <div>
                        <img
                          className="img-fluid"
                          src={webpay}
                          alt="webpay"
                        ></img>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Body style={{ textAlign: "right" }}>
                    <Card.Link href="#">Link 1</Card.Link>
                    <Card.Link href="#">Link 2</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </>
    );
  }
  
  export default Carro;
  