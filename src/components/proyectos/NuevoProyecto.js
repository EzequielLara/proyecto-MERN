import React, {useState, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
 

const NuevoProyecto = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario } = proyectosContext

    const [proyecto, guardarProyecto ] = useState({
            nombre:''

    });

    const onChangeProyecto = (e)=>{
        guardarProyecto({
           ...proyecto,
            [e.target.name] : e.target.value
        })
    };

    const { nombre } = proyecto;

    const onSubmitProyecto = (e)=>{
        e.preventDefault();

        //Validar inputs

        //Agregar al state

        //Reiniciar el formulario


    }
    return (
        <>
        <button 
            type = 'button'
            className = 'btn btn-block btn-primario'
        >NuevoProyecto</button>
        {formulario ?  
            (
                <form 
                className = 'formulario-nuevo-proyecto'
                onSubmit = {onSubmitProyecto}

                    ><input 
                        type='text'
                        className = 'input-text'
                        placeholder = 'Nombre Proyecto'
                        name = 'nombre'
                        value = {nombre}
                        onChange = {onChangeProyecto}
                    />    
                    <input 
                        type='submit'
                        className = 'btn btn-primario btn-block'
                        value = 'Agregar Proyecto'
                    />    
                </form>
               

        ): null
        } 
     
        </>
    )
};

export default NuevoProyecto;