import React from 'react';
import {useMutation, gql} from '@apollo/client';

import {Modal, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const ADD_USUARIO = gql`
    mutation addUsuario(
        $nombre: String!
        $direccion: String!
        $email: String!
        $pass: String!
        $telefono: String!
        $sexo: String!
    ){
        addUsuario(input: {email: $email, pass: $pass, nombre: $nombre, direccion: $direccion,
        telefono: $telefono, sexo: $sexo}){
            id
            nombre
            direccion
            email
            pass
            telefono
            sexo
        }
    }
`

export default function AddUsuario(){
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const refreshPage = ()=>{
        window.location.reload();  }

    const [addU, {data, loading, error}] = useMutation(ADD_USUARIO);
    const [formState, SetFormState] = React.useState({
        nombre: String,
        direccion: String,
        email: String,
        pass: String,
        telefono: String,
        sexo: String
    });

    return (
        <form onSubmit = {e => {
            e.preventDefault();
            addU({
                variables: {
                    nombre: formState.nombre,
                    direccion: formState.direccion,
                    email: formState.email,
                    pass: formState.pass,
                    telefono: formState.telefono,
                    sexo: formState.sexo
                }
            })
            
        }} >     
        
        <div class='container'>
                    <div class='row'>
                        <div class="col-sm">Nombre
                            <div class="col-sm">
                                <input value={formState.nombre} onChange={ e => 
                                    SetFormState({
                                        ...formState, nombre: e.target.value
                                })} type="text" />
                            </div>
                        </div>
                    
                        <div className="col-sm">Dirección
                            <div className="col-sm">
                                <input value={formState.direccion} onChange={ e => 
                                    SetFormState({
                                        ...formState, direccion: e.target.value
                                })} type="text" />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-sm">Email
                            <div className="col-sm">
                                <input value={formState.email} onChange={ e => 
                                    SetFormState({
                                        ...formState, email: e.target.value
                                })} type="text" />
                            </div>
                        </div>
                        
                        <div className="col-sm">Contraseña
                            <div className="col-sm">
                                <input value={formState.pass} onChange={ e => 
                                    SetFormState({
                                        ...formState, pass: e.target.value
                                })} type="password" />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-sm">Telefono
                            <div className="col-sm">
                                <input value={formState.telefono} onChange={ e => 
                                    SetFormState({
                                        ...formState, telefono: e.target.value
                                })} type="text" />
                            </div>
                        </div>
                        
            
                        <div className="col-sm">Sexo
                            <div className="col-sm">
                                <input value={formState.sexo} onChange={ e => 
                                    SetFormState({
                                        ...formState, sexo: e.target.value
                                })} type="text" />
                            </div>
                        </div>
                    </div>


                    <div className='row-2'>
                        <div className="col-12"></div>
                            <Button type="submit" className="btn btn-primary" onClick={handleShow}>Registrarse</Button>
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