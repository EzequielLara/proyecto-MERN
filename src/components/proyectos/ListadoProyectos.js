import React, { useState, useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { OBTENER_PROYECTOS } from '../../types';

const ListadoProyectos = () => {
 
      //obtener el state del formulario
      const proyectosContext = useContext(proyectoContext);
      const { proyectos, obtenerProyectos } = proyectosContext
      
      //Obtener proyectos cuando carga el componente
      useEffect(()=>{
        
        obtenerProyectos();
    },[])
      
      
      //Revisar si tiene contenido 
      if( proyectos.length === 0 ) return <p>Crea un proyecto nuevo para comenzar</p>;

      
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