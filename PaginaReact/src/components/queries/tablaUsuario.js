import React from 'react';
import {useQuery, gql} from '@apollo/client';

const GET_USUARIOS = gql`
    query Query{
        getUsuarios {
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

export default function TablaUsuario(){
    const {loading, error, data} = useQuery(GET_USUARIOS);
    if(loading) return (<p>Cargando...</p>);
    if(error) return (<p>ERROR</p>);
    return (
        <table border="1">
            <tr>
                <td>ID</td>
                <td>NOMBRE</td>
                <td>DIRECCION</td>
                <td>EMAIL</td>
                <td>PASS</td>
                <td>TELEFONO</td>
                <td>SEXO</td>
            </tr>
            {
                data.getUsuarios.map(obj => {
                    return (
                    <tr>
                        <td>{obj.id}</td>
                        <td>{obj.nombre}</td>
                        <td>{obj.direccion}</td>
                        <td>{obj.email}</td>
                        <td>{obj.pass}</td>
                        <td>{obj.telefono}</td>
                        <td>{obj.sexo}</td>
                    </tr>
                    )
                })
            }
        </table>
    )
}
