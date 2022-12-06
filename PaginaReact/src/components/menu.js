import Navigation from "./navigation";
import Footer from "./footer";

import Item from "./item";
import { Row } from "react-bootstrap";
import { useState } from "react";
import ProductoDestacado from "./queries/productoDestacado";
import TablaProductos from "./queries/tablaProductos";
import TablaUsuario from "./queries/tablaUsuario"
import AddProducto from "./mutations/addProducto";



import {useQuery, gql} from '@apollo/client';
import UpdateProducto from "./mutations/updateProducto";

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

const Menu = () => {
    const {data, loading, error} = useQuery(GET_PRODUCTOS);

    const [productosCarro, setProductosCarro] = useState([])
    const agregaCarro = (producto) => {
        setProductosCarro(productosCarro.concat(producto))
    }
    if(loading) return (<p>Cargando...</p>);
    if(error) return (<p>ERROR</p>);

    return (
        <div>
        <Navigation cartProducts={productosCarro}/>
        <div className="contenedor-uno">
            <Row xs={2} md={5} className="g-3">
                {data.getProductos.map(obj => (
                    <Item
                        key={obj.llave}
                        name={obj.nombre}
                        price={obj.precio}
                        img={obj.imagen}
                        description={obj.descripcion}
                        handleAdd={() => agregaCarro(obj)}
                    />
                ))}
            </Row>
            <div class='row'>
                <TablaProductos></TablaProductos>
                <h2>AGREGAR PRODUCTOS</h2>
                <AddProducto></AddProducto>
                <h2>EDITAR PRODUCTO</h2>
                <UpdateProducto></UpdateProducto>

            </div>
        </div>
        <Footer />
        </div>
    );
};

export default Menu;