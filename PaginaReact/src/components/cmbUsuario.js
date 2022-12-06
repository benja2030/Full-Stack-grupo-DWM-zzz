import React from 'react';
import {useQuery, gql} from '@apollo/client';

const GET_USUARIOS = gql`
    query Query{
        getUsuarios {
        id
        email
        }
    }
`

export default function CmbUsuario(){
    const {loading, error, data} = useQuery(GET_USUARIOS);
    if(loading) return (<p>Cargando...</p>);
    if(error) return (<p>ERROR</p>);
    return (
        <select name="cmbUsuario">
            {
                data.getUsuarios.map(obj => {
                    return (
                        <option value={obj.id}>{obj.email}</option>
                    )
                })
            }
        </select>
    )
}
