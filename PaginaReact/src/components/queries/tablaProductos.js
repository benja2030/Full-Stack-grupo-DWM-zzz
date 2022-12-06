import React from 'react';
import {useQuery, gql} from '@apollo/client';

const GET_PRODUCTOS = gql`
    query Query{
        getProductos {
        llave
        nombre
        precio
        imagen
        descripcion
        id
        }
    }
`

export default function TablaProductos(){
    const {data, loading, error} = useQuery(GET_PRODUCTOS);
    if(loading) return (<p>Cargando...</p>);
    if(error) return (<p>ERROR</p>);
    return (
        <table border="1">
            <tr>
                <td>LLAVE</td>
                <td>NOMBRE</td>
                <td>PRECIO</td>
                <td>IMAGEN</td>
                <td>DESCRIPCION</td>
                <td>ID</td>
            </tr>
            {
                data.getProductos.map(obj => {
                    return (
                    <tr>
                        <td>{obj.llave}</td>
                        <td>{obj.nombre}</td>
                        <td>{obj.precio}</td>
                        <td>{obj.imagen}</td>
                        <td>{obj.descripcion}</td>
                        <td>{obj.id}</td>
                    </tr>
                    )
                })
            }
        </table>
    )
}
