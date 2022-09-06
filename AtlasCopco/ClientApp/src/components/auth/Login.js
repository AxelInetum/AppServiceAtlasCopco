import React, { useEffect }  from 'react';
import { loginRequest } from "../auth/authConfig";
import { useTranslation } from 'react-i18next';
import {useMsal } from "@azure/msal-react";

const Login = () => {
    const { instance } = useMsal();
    const {t,i18n} = useTranslation();
    function OnLanguageChanged(e) {
        i18n.changeLanguage(e.target.value)
    }
   
    useEffect(() => {
        i18n.changeLanguage(document.getElementById("selectedLenguage").value)
    },[]);
     
    const onSubmit = e =>
    {
        e.preventDefault(); 
    }
    return (
   
        <div className ="form-usuario ImageBackgroundLogin">
            <div className="contenedor-form sombra-dark">       
                    <h1>{t('iniciarsesion')}</h1>
                    <form
                      onSubmit={onSubmit}>
                        <div className="campo-form form-select">
                            <select id="selectedLenguage" onChange={OnLanguageChanged}>                           
                                    <option value='fa'>فارسی</option>  
                                    <option value='es' selected>Español</option>                                  
                                    <option value='en'>English</option>
                                    <option value='fr'>French</option>                                  
                            </select>
                         </div>
                        <div className="campo-form">
                            <input type="submit"  onClick={() => instance.loginRedirect(loginRequest)} className="btn btn-primary btn-block btn-lg" value={t('iniciarsesion')}/>
                        </div>
                    </form>
            </div>
        </div>
    );
}

export default Login;