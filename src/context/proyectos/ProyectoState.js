import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

import  uuid from 'uuid';

import { useReducer } from 'react';
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, VALIDAR_FORMULARIO, PROYECTO_ACTUAL,ELIMINAR_PROYECTO} from '../../types'

const ProyectoState = props =>{
        
        const proyectos = [
            {id: 1, nombre: 'Tienda Virtual'},
            {id: 2, nombre: 'Intranet'},
            {id: 3, nombre: 'Diseño de Web'},
            {id: 4, nombre: 'Woo Comerce'}
        ]

        const initialState = {
            proyectos: [],
            formulario : false,
            errorformulario: false,
            proyecto: null
        }

        //Dispach para ejecutar las acciones
        const [state, dispatch] = useReducer(proyectoReducer, initialState);

        //Serie de funciones para el CRUD
        const mostrarFormulario = () =>{
            dispatch({
                type: FORMULARIO_PROYECTO
                
            })
        }
        //Obtener los proyectos
        const obtenerProyectos = () =>{
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: proyectos
            })
        }
    
    
        //agregar nuevo proyecto
        const agregarProyecto = proyecto =>{
            proyecto.id = parseInt(state.proyectos.length +1);
        
        //Insertar el proyecto en el state
           dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
            
           })
        }
        //Mostrar error en validación
        const mostrarError = ()=>{
            dispatch({
                type: VALIDAR_FORMULARIO
            })
        }

        //Selecciona el proyecto en el cual el usuario pulso
        const proyectoActual = proyectoId =>{
            dispatch({
                type: PROYECTO_ACTUAL,
                payload: proyectoId
            })
        }

        //Eliminar un proyecto
        const eliminarProyecto = proyectoId =>{

            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
        }
    
    
        return (
            <proyectoContext.Provider
                value ={{
                    proyectos: state.proyectos,
                    formulario: state.formulario,
                    errorformulario: state.errorformulario,
                    proyecto: state.proyecto,
                    mostrarFormulario,
                    obtenerProyectos,
                    agregarProyecto,
                    mostrarError,
                    proyectoActual,
                    eliminarProyecto
                    
                }}
            >
                {props.children}
            </proyectoContext.Provider>
        )

}

    export default ProyectoState;