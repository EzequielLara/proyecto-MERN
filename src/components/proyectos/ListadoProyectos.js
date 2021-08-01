import React, { useState, useContext } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
 
      //obtener el state del formulario
      const proyectosContext = useContext(proyectoContext);
      const { proyectos } = proyectosContext
      //Revisar si tiene contenido 
      if( proyectos.lenght === 0 ) return null;

    return (
        <>
            <ul className = 'listado-proyectos'>
                {proyectos.map((proyecto)=>(

                    <Proyecto
                        key = {proyecto.id}
                        proyecto = {proyecto}
                    />

                ))}    
            </ul>
        </>
    );
};

export default ListadoProyectos;