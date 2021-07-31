import React, {useState} from 'react';

const NuevoProyecto = () => {

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
        </>
    )
};

export default NuevoProyecto;