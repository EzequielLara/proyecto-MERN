import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { useReducer } from 'react';

const ProyectoState = props =>{

        const initialState = {
            formulario : false
        }

        //Dispach para ejecutar las acciones
        const [state, dispatch] = useReducer(proyectoReducer, initialState);

        //Serie de funciones para el CRUD

        return (
            <proyectoContext.Provider
                value ={{
                    formulario: state.formulario
                }}
            >
                {props.children}
            </proyectoContext.Provider>
        )

    }

    export default ProyectoState;