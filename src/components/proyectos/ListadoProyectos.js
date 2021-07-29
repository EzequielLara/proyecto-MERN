import React, { useState } from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {
    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Tienda Virtual'},
        {nombre: 'Tienda Virtual'},
        {nombre: 'Tienda Virtual'},

    ]
    
    return (
        <>
            <ul className = 'listado-proyectos'>
                {proyectos.map((proyecto, index)=>(

                    <Proyecto
                        key = {index}
                        proyecto = {proyecto}
                    />

                ))}    
            </ul>
        </>
    );
};

export default ListadoProyectos;