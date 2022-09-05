import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {LoginUserLdap} from '../../actions/UsersActions';
import { loginRequest } from "../auth/authConfig";
import Alert from '../Alert/Alert';
import { useTranslation } from 'react-i18next';
import { NavigationBar } from '../auth/NavigationBar';
import {useMsal } from "@azure/msal-react";

const Login = ({history}) => {
    const { instance } = useMsal();
    const dispatch = useDispatch();
    const {t,i18n} = useTranslation();
    function OnLanguageChanged(e) {
        i18n.changeLanguage(e.target.value)
    }
    
    const [Usuario,GuardarUsuario] = useState({
        emailUser: '',
        password: ''
    });
 
    const {emailUser,password} = Usuario;
    const OnChange = e => 
    {
        GuardarUsuario({
            ...Usuario,
            [e.target.name] : e.target.value
        })
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
               <p>axel</p>
              <NavigationBar></NavigationBar>
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