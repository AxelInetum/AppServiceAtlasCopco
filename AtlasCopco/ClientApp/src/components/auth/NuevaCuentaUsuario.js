import react,  { useState } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import sha256 from 'crypto-js/sha256'
const NuevaCuentaUsuario = () => {

    //state Iniciar Sesión
    const [NuevaCuentaUsuarios,CrearCuentaUsuario] = useState({
        nombre:'',
        email:'',
        password: '',
        confirmarpassword: ''
    });
    
    //extraemos los valores de los inputs 
    const {nombre,email,password,confirmarpassword} = NuevaCuentaUsuarios;
    //si mostramos alerta o no 
    const [ShowAlert,SetShowAlert] = useState(false);
    //mesnaje alert
    const [MensajeAlert,SetMensajeAlert] = useState("");

    //inclusion de js par encriptar Contraseña
    var CryptoJS = require("crypto-js");
    //inicialización variable contraseña encriptada en Sha256
    var  Contraseñasha256Hash = "";

    //cada cambio seteamos el objeto usuario 
    const OnChange = e => 
    {
        CrearCuentaUsuario({
            ...NuevaCuentaUsuarios,
            [e.target.name] : e.target.value
        })
        SetShowAlert(false);
        SetMensajeAlert("");
    }

    async function CrearCuentaUsuarios()
    {
        debugger;
       await Axios.post(`http://localhost:7071/api/validateUserLdap`, {
            nombre: NuevaCuentaUsuarios.nombre,
            email: NuevaCuentaUsuarios.email,
            password: CryptoJS.SHA256(NuevaCuentaUsuarios.password).toString(),     
             }
            ).then(res => 
            {           
                debugger          
                if (res.data !="" && res.data !="existe")
                {
                    SetShowAlert(true);
                    SetMensajeAlert("Usuario Creado correctamente");
                }
                else
                {
                     if (res.data =="existe")
                     {
                        SetShowAlert(true);
                        SetMensajeAlert("El email ya existe");
                     }
                     else
                     {
                        SetShowAlert(true);
                        SetMensajeAlert("Error Creación Usuario");
                     }
                }
        })
    }
   
    const onSubmit = e =>
    {
        e.preventDefault();
        if(nombre.trim() === '' ||email.trim() ===  '' || 
        password.trim() === '' || confirmarpassword.trim() === '' )
        {
            SetShowAlert(true);
            SetMensajeAlert("Los campos són obligatorios");
        }
        else
        {
        
            if (password.trim() != confirmarpassword.trim()) 
            {
                SetShowAlert(true);
                SetMensajeAlert("Contraseñas diferentes");
            }
            else
            {
                SetShowAlert(false);
                SetMensajeAlert("");  
                CrearCuentaUsuarios();                              
         
            }           
        }
    }

    return (
        <div className ="form-usuario ImageBackgroundLogin">
            
            <div className="contenedor-form sombra-dark">
            <br></br>
            {ShowAlert ? (<div className="alerta alerta-error">{MensajeAlert}</div>) : null}
                   
                    <h1>Crear Cuenta Usuario</h1>
                    <form
                      onSubmit={onSubmit}
                    >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={OnChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={OnChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={OnChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmarpassword">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmarpassword"
                            name="confirmarpassword"
                            placeholder="Confirmar password"
                            value={confirmarpassword}
                            onChange={OnChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-success btn-block btn-lg" value="Crear cuenta"/>
                    </div>
                    </form>
                    <Link to={'/'} className="enlace-cuenta">Volver a login </Link>
            </div>
        </div>
    );
}

export default NuevaCuentaUsuario;