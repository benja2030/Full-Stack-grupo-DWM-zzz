import { Row } from "react-bootstrap";
import Footer from "./footer";
import Navigation from "./navigation";
import CartProduct from "./cartProduct";

const Cart = ({ cartProducts }) => {
  return (
    <div>
      <Navigation />
      <div className="contenedor-uno">
        <Row>
          {cartProducts.map((cartProduct) => (
            <CartProduct
              img={cartProduct.img}
              name={cartProduct.name}
              price={cartProduct.price}
              description={cartProduct.description}
            />
          ))}
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
