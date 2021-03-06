import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {
    const [usuario, guardarUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''

    });

    //Extraer usuario
    const {nombre, email, password, confirmar} = usuario;

    const onChange = (e)=>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })

    }

    const onSubmit = e =>{
        e.preventDefault();

        //Validar que no haya campos vacios
        //Password minimo de 6 caracteres
        //Ambos password iguales
        //Pasar la accion
    }
    return (
        <div className = 'form-usuario'>
            <div className = 'contenedor-form sombra-dark'>
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit ={onSubmit}
                >
                    <div className = 'campo-form'>
                        <label htmlFor = 'nombre'>Nombre</label>
                        <input
                            type = 'nombre'
                            id = 'nombre'
                            name = 'nombre'
                            placeholder = 'Tu nombre'
                            value ={nombre}
                            onChange = {onChange}
                        />
                    </div>
                    <div className = 'campo-form'>
                        <label htmlFor = 'email'>Email</label>
                        <input
                            type = 'email'
                            id = 'email'
                            name = 'email'
                            placeholder = 'Tu email'
                            value ={email}
                            onChange = {onChange}
                        />
                    </div>
                    <div className = 'campo-form'>
                        <label htmlFor = 'password'>Password</label>
                        <input
                            type = 'password'
                            id = 'password'
                            name = 'password'
                            placeholder = 'Tu password'
                            value = {password}
                            onChange = {onChange}
                        />
                    </div>
                    <div className = 'campo-form'>
                        <label htmlFor = 'confirmar'>Confirmar Password</label>
                        <input
                            type = 'password'
                            id = 'confirmar'
                            name = 'confirmar'
                            placeholder = 'confirmar contrase??a'
                            value = {confirmar}
                            onChange = {onChange}
                        />
                    </div>

                    <div className = 'campo-form'>
                        <input type ='submit' value = 'Registrarme' className = 'btn btn-primario btn-block' 
                        />
                    </div>
                </form>

                <Link to={'/'} className = 'enlace-cuenta'>
                    Volver a Iniciar Sesi??n
                </Link>
            </div>
        </div>
    );
};

export default NuevaCuenta;