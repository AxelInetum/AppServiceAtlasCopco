import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {HiddenEditPopupTruck,EditTrucks,UpdateListTrucks} from '../../actions/TruckActions';
import {Button,ModalHeader,Modal,ModalBody,ModalFooter,FormGroup,Input,Label} from 'reactstrap';
import Alert from '../Alert/Alert';
import { useTranslation } from 'react-i18next';

const EditOrder = ({showEditPopup,setshowEditPopup}) => {
    debugger;
    const { t} = useTranslation();
    const dispatch = useDispatch();

    //state Iniciar Sesión
    const [EditarCamion,SetEditarCamion] = useState({
        id: 0,
        nombre:'',
        marca:'',
        modelo: '',
        matricula: '',
    });

    const modalStyle=
   {
        position:"absolute",
        top: '10%',
        left: '30%'       
   }
    const ClosePopup=() => 
    {
        setshowEditPopup(false);
    }

    const OnChange = e => 
    {
        SetEditarCamion({
            ...EditarCamion,
            [e.target.name] : e.target.value
        })
    }
   
    const onSubmit = e =>
    { 
        e.preventDefault();
        if(EditarCamion.nombre.trim() === '' ||EditarCamion.marca.trim() ===  '' || 
        EditarCamion.modelo.trim() === '' || EditarCamion.matricula.trim() === '' )
        {
            Alert(t('camposobligatorios') ,t('nosehainsertado'),"error");
        }
        else
        { 
            debugger;
            dispatch(EditTrucks(EditarCamion,{t})); 
            debugger;
                                   
        }
    }
    
    
    return (
        <Modal isOpen={showEditPopup} fade={false} style={modalStyle}>
        <ModalHeader ><a class="mover" onClick={() => ClosePopup()}>x</a></ModalHeader>
        <ModalBody>
        <div >
            <div >
            <br></br>
                   <h1>{t('EditarCamion')}</h1>
                    <form onSubmit={onSubmit}>                   
                    <div className="campo-form">
                        <label htmlFor="nombre">{t('Nombre')}</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            class="form-control"
                            placeholder={t('TuNombre')}
                            value={EditarCamion == undefined ? "" : EditarCamion.nombre}
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
                            value={EditarCamion == undefined ? '' : EditarCamion.marca}
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
                            value={EditarCamion == undefined ? '' : EditarCamion.modelo}
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
                            value={EditarCamion == undefined ? '' : EditarCamion.matricula}
                            onChange={OnChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-success btn-block btn-lg" value={t('EditarCamion')}/>
                    </div>
                </form>                                       
            </div>
        </div>
        </ModalBody>
        </Modal>
    );
}

export default EditOrder;