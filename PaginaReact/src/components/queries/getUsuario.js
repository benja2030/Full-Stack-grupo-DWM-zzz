import React from 'react';
import {useQuery, gql} from '@apollo/client';

const GET_USUARIO = gql`
    query getUsuario(
        $id: ID!
    ){
        getUsuario(id: $id){
            id 
            email
            pass
        }
    }
`;

export default function GetUsuario() {
    const {loading, error, data} = useQuery(GET_USUARIO, {
        variables: { id: '632cdd750a7b9193f44f02d3' },
    });
    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error</p>

    return (
    <>
                <ul>             
                        <li>{data.getUsuario.email}</li>
                        <li>{data.getUsuario.pass}</li>
                </ul>
            
        </>
    );
}