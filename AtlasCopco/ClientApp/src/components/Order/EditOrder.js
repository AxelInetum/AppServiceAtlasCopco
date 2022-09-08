import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {ModalHeader,Modal,ModalBody} from 'reactstrap';
import Alert from '../Alert/Alert';
import { useTranslation } from 'react-i18next';
import {EditOrders} from '../../actions/OrderActions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditOrder = ({loadDatas,showEditPopup,setshowEditPopup}) => {
    debugger;
    const dispatch = useDispatch();
    const { t} = useTranslation();


    const [startDateStart, setStartDateStart] = useState(new Date());  
    const [startDateEnd, setStartDateEnd] = useState(new Date());  
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
        
    }
   
    const onSubmit = e =>
    { 
        debugger;
        e.preventDefault();
        if(loadDatas.title.trim() === '' )
        {
            Alert(t('camposobligatorios') ,t('nosehainsertado'),"error");
        }
        else
        {
            dispatch(EditOrders(loadDatas,{t}));                               
        }
    }
    
    
    return (
        <Modal isOpen={showEditPopup} fade={false} style={modalStyle}>
        <ModalHeader ><a class="mover" onClick={() => ClosePopup()}>x</a></ModalHeader>
        <ModalBody>
        <div >
            <div >
            <br></br>
                    <h1>{t('editarPedido')}</h1>
                    <form onSubmit={onSubmit}>                   
                    <div className="campo-form">
                        <label htmlFor="nombre">{t('tituloPedido')}</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            class="form-control"
                            placeholder={t('TuNombre')}
                            value={loadDatas.title}
                            onChange={OnChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label>{t('fechaInicio')}: </label>
                        <DatePicker 
                            showTimeSelect
                            dateFormat="dd/mm/yyyy hh:mm:ss"
                            timeIntervals={15}
                            selected={loadDatas.Start} 
                            onChange={date => setStartDateStart(date)} />
                    </div>
                    <div className="campo-form">
                        <label>{t('fechaFin')}: </label>
                        <DatePicker 
                            showTimeSelect
                            dateFormat="dd/mm/yyyy hh:mm:ss"
                            timeIntervals={15}
                            selected={loadDatas.End} 
                            onChange={date => setStartDateEnd(date)} />
                    </div>                    
                    <div className="campo-form">
                        <input type="submit" className="btn btn-success btn-block btn-lg" value={t('editarPedido')}/>
                    </div>
                </form>                                       
            </div>
        </div>
        </ModalBody>
        </Modal>
    );
}

export default EditOrder;