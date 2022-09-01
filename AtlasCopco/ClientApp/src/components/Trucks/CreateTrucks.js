import react,  { useState } from 'react';
import {Link} from 'react-router-dom';
import {CreateTruck} from '../../actions/TruckActions';
import {useDispatch} from 'react-redux';
import Alert from '../Alert/Alert';
import { useTranslation } from 'react-i18next';
const CreateTrucks = ({history}) => {

    const dispatch = useDispatch();
    const { t} = useTranslation();
    const [NuevoCamion,CrearCamion] = useState({
        nombre:'',
        marca:'',
        modelo: '',
        matricula: '',
    });
    
    const {nombre,marca,modelo,matricula} = NuevoCamion;

    //cada cambio seteamos el objeto usuario 
    const OnChange = e => 
    {
        CrearCamion({
            ...NuevoCamion,
            [e.target.name] : e.target.value
        })
    }
   
    const onSubmit = e =>
    {
        e.preventDefault();
        if(nombre.trim() === '' ||marca.trim() ===  '' || 
        modelo.trim() === '' || matricula.trim() === '' )
        {
            Alert(t('camposobligatorios'),t('nosehainsertado'),"error");
        }
        else
        {      
            dispatch(CreateTruck(NuevoCamion,history,{t}));                                             
        }
    }
    return (
        <div className ="form-usuarioCrear ImageBackgroundLogin">      
            <div className="contenedor-form sombra-dark">                
                <h1>{t('CrearCamion')}</h1>
                <form
                    onSubmit={onSubmit}
                >
                <div className="campo-form">
                    <label htmlFor="nombre">{t('Nombre')}</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        class="form-control"
                        placeholder={t('TuNombre')}
                        value={nombre}
                        onChange={OnChange}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="marca">{t('Marca')}</label>
                    <input
                        type="text"
                        id="marca"
                        name="marca"
                        class="form-control"
                        placeholder={t('IntroducirMarca')}
                        value={marca}
                        onChange={OnChange}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="modelo">{t('Modelo')}</label>
                    <input
                        type="text"
                        id="modelo"
                        name="modelo"
                        class="form-control"
                        placeholder={t('IntroducirModelo')}
                        value={modelo}
                        onChange={OnChange}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="matricula">{t('Matricula')}</label>
                    <input
                        type="text"
                        id="matricula"
                        name="matricula"
                        class="form-control"
                        placeholder={t('IntroducirMatricula')}
                        value={matricula}
                        onChange={OnChange}
                    />
                </div>

                <div className="campo-form">
                    <input type="submit" className="btn btn-success btn-block btn-lg" value={t('CrearCamion')}/>
                </div>
                </form>                   
                <Link to={'/TrucksPage'} className="enlace-cuenta">{t('Iralitadodecamiones')}</Link>
            </div>
        </div>
    );
}

export default CreateTrucks;