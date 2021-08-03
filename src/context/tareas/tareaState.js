import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

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
    }

    //Crear dispath y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);
    
    return(

        <TareaContext.Provider
                value = {{
                    tareas: state.tareas
                }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;




