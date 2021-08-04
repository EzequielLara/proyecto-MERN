import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { TAREAS_PROYECTO, AGREGAR_TAREA } from '../../types';

const TareaState = props =>{

    const initialState = {
        tareas: [
            {nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            {nombre: 'Elegir Colores', estado: true, proyectoId: 2},
            {nombre: 'Elegir Hosting', estado: false, proyectoId:3 },
            {nombre: 'Elegir Dia', estado: true, proyectoId:4},
            {nombre: 'Elegir Presentación', estado: false, proyectoId:5},
            {nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            {nombre: 'Elegir Colores', estado: true, proyectoId: 2},
            {nombre: 'Elegir Hosting', estado: false, proyectoId:3 },
            {nombre: 'Elegir Dia', estado: true, proyectoId:4},
            {nombre: 'Elegir Presentación', estado: false, proyectoId:5},
            {nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            {nombre: 'Elegir Colores', estado: true, proyectoId: 2},
            {nombre: 'Elegir Hosting', estado: false, proyectoId:3 },
            {nombre: 'Elegir Dia', estado: true, proyectoId:4},
            {nombre: 'Elegir Presentación', estado: false, proyectoId:5}
        ],
        tareasproyecto: null
    }

    //Crear dispath y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);
    
    //FUNCIONES
    //obtener las tareas de un proyecto
    const obtenerTareas = proyectoId =>{
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }
    //agregar tarea al proyecto seleccionado
    const agregarTarea = tarea =>{
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    return(

        <TareaContext.Provider
                value = {{
                    tareas: state.tareas,
                    tareasproyecto: state.tareasproyecto,
                    obtenerTareas,
                    agregarTarea
                }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;




