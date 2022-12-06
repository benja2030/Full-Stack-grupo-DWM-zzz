import React from 'react';
import {useMutation, gql} from '@apollo/client';

import {Modal, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const ADD_PRODUCTO = gql`
    mutation addProducto(
        $llave: Int!
        $nombre: String!
        $precio: Int!
        $imagen: String!
        $descripcion: String!
    ){
        addProducto(input: {llave: $llave, nombre: $nombre, precio: $precio, imagen: $imagen, descripcion: $descripcion}){
            llave
            nombre
            precio
            imagen
            descripcion
        }
    }
`

export default function AddProducto(){
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const refreshPage = ()=>{
        window.location.reload();  }

    const [addU, {data, loading, error}] = useMutation(ADD_PRODUCTO);
    const [formState, SetFormState] = React.useState({
        llave: Number,
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
                    llave: formState.llave,
                    nombre: formState.nombre,
                    precio: formState.precio,
                    imagen: formState.imagen,
                    descripcion: formState.descripcion
                }
            })
            
        }} >     
        
        <div class='container'>
                    <div class='row'>
                        <div class="col-sm">Llave
                            <div class="col-sm">
                                <input value={formState.llave} onChange={ e => 
                                    SetFormState({
                                        ...formState, llave: parseInt(e.target.value)
                                })} type="number" />
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
                            <Button type="submit" className="btn btn-primary" onClick={handleShow}>Registrar producto</Button>
                    </div>
                    <Modal className="my-modal" show={show} onHide={refreshPage}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Registrado!</Modal.Body>
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