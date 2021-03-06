import React, {useState, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
 

const NuevoProyecto = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext

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
        if(nombre === ''){
            mostrarError();    
            return;
        }


        //Agregar al state
        agregarProyecto(proyecto)

        //Reiniciar el formulario
        guardarProyecto({
            nombre: ''
        })


    }
    return (
        <>
        <button 
            type = 'button'
            className = 'btn btn-block btn-primario'
            onClick = {mostrarFormulario}
            
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

        {errorformulario ? <p className = 'mensaje error'>* Nombre obligatorio</p> : null}

        </>
    )
};

export default NuevoProyecto;