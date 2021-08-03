import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

        //obtener el state del formulario
        const proyectosContext = useContext(proyectoContext);
        const { proyectoActual } = proyectosContext;

        //obtener la funcion del context de tarea
        const tareasContext = useContext(tareaContext);
        const {obtenerTareas} = tareasContext;
   
        //agregar proyecto actual
        const seleccionarProyecto = id =>{
                proyectoActual(id); //Fijar proyecto actual
                obtenerTareas(id); //filtrar tareas
        }
        return (
        <li>
            <button
                type = 'button'
                className = 'btn btn-blank'
                onClick = {()=>seleccionarProyecto(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
    );
};

export default Proyecto;