import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {LoginUserLdap} from '../../actions/UsersActions';
import Alert from '../Alert/Alert';
import { useTranslation } from 'react-i18next';
import { NavigationBar } from '../auth/NavigationBar';

const Login = ({history}) => {
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
        debugger;
        if(emailUser === '' || password ===  '' )
        {
            Alert(t("camposobligatorios"),t("credencialesIncorrectas"),"error");
        }
        else
        {       
            dispatch(LoginUserLdap(Usuario,history,{t}));                              
        }
    }
    return (
   
        <div className ="form-usuario ImageBackgroundLogin">
               <p>axel</p>
              <NavigationBar></NavigationBar>
            <div className="contenedor-form sombra-dark">       
                    <h1>{t('iniciarsesion')}</h1>
                    <form
                      onSubmit={onSubmit}>
                        <div className="campo-form">
                            <label htmlFor="emailUser">{t('Email')}</label>
                            <input
                                type="string"
                                id="emailUser"
                                name="emailUser"
                                class="form-control"
                                placeholder={t('TuEmail')}
                                value={emailUser}
                                onChange={OnChange}
                             />
                        </div>
                        
                        <div className="campo-form">
                            <label htmlFor="password">{t('Password')}</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                class="form-control"
                                placeholder={t('TuPassword')}
                                value={password}
                                onChange={OnChange}
                             />
                        </div>
                        <div className="campo-form form-select">
                            <select id="selectedLenguage" onChange={OnLanguageChanged}>                           
                                    <option value='fa'>فارسی</option>  
                                    <option value='es' selected>Español</option>                                  
                                    <option value='en'>English</option>
                                    <option value='fr'>French</option>                                  
                            </select>
                         </div>

                        <div className="campo-form">
                            <input type="submit" className="btn btn-primary btn-block btn-lg" value={t('iniciarsesion')}/>
                        </div>
                    </form>
                    <Link hidden={true} to={'/Nueva-Cuenta-Usuario'} className="enlace-cuenta">
                     Crear nueva cuenta usuario
                    </Link>
            </div>
        </div>
    );
}

export default Login;