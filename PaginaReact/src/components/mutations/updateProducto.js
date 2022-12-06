import React from 'react';
import {useMutation, gql} from '@apollo/client';

import {Modal, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const UPDATE_PRODUCTO = gql`
    mutation updateProducto(
        $id: ID!
        $nombre: String!
        $precio: Int!
        $imagen: String!
        $descripcion: String!
    ){
        updateProducto(id: $id, input: {nombre: $nombre, precio: $precio, imagen: $imagen, descripcion: $descripcion}){
            id
            nombre
            precio
            imagen
            descripcion
        }
    }
`

export default function UpdateProducto(){
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const refreshPage = ()=>{
        window.location.reload();  }

    const [addU, {data, loading, error}] = useMutation(UPDATE_PRODUCTO, {
        variables: {id: "638e526d2fad52e259159dee"}
    });
    const [formState, SetFormState] = React.useState({
        id: String,
        nombre: String,
        precio: Number,
        imagen: String,
        descripcion: String
    });

    return (
        <form onSubmit = {e => {
            e.preventDefault();
            addU({
                variables: {
                    id: formState.id,
                    nombre: formState.nombre,
                    precio: formState.precio,
                    imagen: formState.imagen,
                    descripcion: formState.descripcion
                }
            })
            
        }} >     
        
        <div class='container'>
                    <div class='row'>

                        <div className="col-sm">ID
                            <div className="col-sm">
                                <input value={formState.id} onChange={ e => 
                                    SetFormState({
                                        ...formState, id: e.target.value
                                })} type="text" />
                            </div>
                        </div>

                        <div className="col-sm">Nombre
                            <div className="col-sm">
                                <input value={formState.nombre} onChange={ e => 
                                    SetFormState({
                                        ...formState, nombre: e.target.value
                                })} type="text" />
                            </div>
                        </div>
                    

                    
                        <div className="col-sm">Precio
                            <div className="col-sm">
                                <input value={formState.precio} onChange={ e => 
                                    SetFormState({
                                        ...formState, precio: parseInt(e.target.value)
                                })} type="number" />
                            </div>
                        </div>
                        
                        <div className="col-sm">Imagen
                            <div className="col-sm">
                                <input value={formState.imagen} onChange={ e => 
                                    SetFormState({
                                        ...formState, imagen: e.target.value
                                })} type="text" />
                            </div>
                        </div>
                    

                    
                        <div className="col-sm">Descripcion
                            <div className="col-sm">
                                <input value={formState.descripcion} onChange={ e => 
                                    SetFormState({
                                        ...formState, descripcion: e.target.value
                                })} type="text" />
                            </div>
                        </div>
                        
                    </div>


                    <div className='row-2'>
                        <div className="col-12"></div>
                            <Button type="submit" className="btn btn-primary" onClick={handleShow}>Editar producto</Button>
                    </div>
                    <Modal className="my-modal" show={show} onHide={refreshPage}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Editado!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={refreshPage}>
                                OK
                            </Button>
                        </Modal.Footer>
                    </Modal>
            </div>
        </form>
    )
}