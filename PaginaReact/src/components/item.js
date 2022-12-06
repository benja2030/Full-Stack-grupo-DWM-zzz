import { Col, Card, Button, ListGroup, } from "react-bootstrap";

const Item = ({name, price, description, img, handleAdd}) => {

    return (
        <Col>
        <Card className="text-black" style={{ padding: "1%" }}>
            <Card.Img
            variant="top"
            src={img}
            />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <h6> Roll </h6>
            <small className="text-muted">{description}</small>
            <Card.Footer>
                <ListGroup.Item className="d-flex justify-content-center">
                {price}
                </ListGroup.Item>
                <div className="d-flex justify-content-center">
                <Button variant="primary" size="sm" onClick={handleAdd}>
                    Añadir carro
                </Button>
                </div>
            </Card.Footer>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Item;