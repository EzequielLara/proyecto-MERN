import React, {useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext'

const ListadoTareas = () => {
    
    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;
    //Si no hya proyecto seleccionado
    if(!proyecto){ return <h2>Selecciona un proyecto</h2>;}

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;
    
    const tareas = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Plataforma', estado: false},
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Plataforma', estado: false}
    ]

    return (
      <>
        <h2>Proyecto: {proyectoActual.nombre}</h2>

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