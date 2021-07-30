import React from 'react';
import Tarea from './Tarea'

const ListadoTareas = () => {

    const tareas = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Plataforma', estado: true}
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
      </>  
    );
};

export default ListadoTareas;