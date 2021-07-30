import React from 'react';
import Tarea from './Tarea'

const ListadoTareas = () => {

    const tareas = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Plataforma', estado: false},
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Plataforma', estado: false}
    ]

    return (
      <>
        <h2>Proyecto: Tienda Virtual</h2>

        <ul className = 'listado-tareas'>
            {tareas.length === 0
                ? (<li className = 'tarea'><p>No hay tareas</p></li>)
                :
                
                   tareas.map(tarea=>(
                        <Tarea
                            tarea = {tarea}
                        />
                    ))
            }
                
            
        </ul>

        <button
            type = 'button'
            className = 'btn btn-eliminar'
        >Eliminar Proyecto &times;</button>
      </>  
    );
};

export default ListadoTareas;