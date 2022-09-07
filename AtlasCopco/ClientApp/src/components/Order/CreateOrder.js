import React ,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {CreateTruck} from '../../actions/TruckActions';
import {useDispatch,useSelector} from 'react-redux';
import Alert from '../Alert/Alert';
import { useTranslation } from 'react-i18next';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ModalHeader,Modal,ModalBody} from 'reactstrap';

const CreateOrder = ({show,setshow}) => {
    debugger;
    const dispatch = useDispatch();
    const { t} = useTranslation();
    const [startDate, setStartDate] = useState(new Date());  
    
    //cada cambio seteamos el objeto usuario 
    const OnChange = e => 
    {
      
    }
    const ClosePopup=() => 
    {
        setshow(false);
    }
    const modalStyle=
    {
        position:"absolute",
        top: '10%',
        left: '30%'       
    }
   
    const onSubmit = e =>
    {
        /*
        e.preventDefault();
        if(nombre.trim() === '' )       
        {
            Alert(t('camposobligatorios'),t('nosehainsertado'),"error");
        }
        else
        {      
            dispatch(CreateTruck(NuevoCamion,history,{t}));                                             
        }
        */
    }
    return (
        <Modal isOpen={show} fade={false} style={modalStyle}>
        <ModalHeader ><a class="mover" onClick={() => ClosePopup()}>x</a></ModalHeader>
        <ModalBody>
        <div >
            <div >
            <br></br>
                    <h1>{t('crearPedido')}</h1>
                    <form onSubmit={onSubmit}>                   
                    <div className="campo-form">
                        <label htmlFor="nombre">{t('Nombre')}</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            class="form-control"
                            placeholder={t('TuNombre')}
                            value={''}
                            onChange={OnChange}
                        />
                    </div>
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                    <div className="campo-form">
                        <input type="submit" className="btn btn-success btn-block btn-lg" value={t('crearPedido')}/>
                    </div>
                </form>                                       
            </div>
        </div>
        </ModalBody>
        </Modal>
    );
}

export default CreateOrder;