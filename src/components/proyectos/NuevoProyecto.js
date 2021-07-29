import React from 'react';

const NuevoProyecto = () => {
    return (
        <>
        <button 
            type = 'button'
            className = 'btn btn-block btn-primario'
        >NuevoProyecto</button>

        <form className = 'formulario-nuevo-proyecto'>
            <input 
                type='text'
                className = 'input-text'
                placeholder = 'Nombre Proyecto'
                name = 'nombre'
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