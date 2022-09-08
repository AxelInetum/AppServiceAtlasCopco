import React ,{useState} from 'react';
import { useTranslation } from 'react-i18next';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch} from 'react-redux';
import Alert from '../Alert/Alert';
import {CreateOrders} from '../../actions/OrderActions';
import {ModalHeader,Modal,ModalBody} from 'reactstrap';

const CreateOrder = ({showCreatePopup,setshowCreatePopup}) => {
    const dispatch = useDispatch();
    const { t} = useTranslation();
    const [CreateOrder,SetOrder] = useState({
        title:'',
        Start:'',
        End:'',
        createdOrder:0
    });
    const [startDateStart, setStartDateStart] = useState(new Date());  
    const [startDateEnd, setStartDateEnd] = useState(new Date());  
    
    const OnChange = e => 
    {
        debugger;
        SetOrder({
            ...CreateOrder,
            [e.target.name] : e.target.value
        })
    }
    const ClosePopup=() => 
    {
        setshowCreatePopup(false);
    }
    const modalStyle=
    {
        position:"absolute",
        top: '10%',
        left: '30%'       
    }
    
   
    const onSubmit = e =>
    {    
        e.preventDefault();
        if(CreateOrder.title.trim() === '' )       
        {
            Alert(t('camposobligatorios'),t('nosehainsertado'),"error");
        }
        else
        {      
            CreateOrder.Start = startDateStart //'06-09-2022 12:52:18.000';
            CreateOrder.End = startDateEnd //'07-09-2022 12:52:18.000';
            debugger;
            dispatch(CreateOrders(CreateOrder,{t}));                                             
        }    
    }
    return (
        <Modal isOpen={showCreatePopup} fade={false} style={modalStyle}>
        <ModalHeader ><a class="mover" onClick={() => ClosePopup()}>x</a></ModalHeader>
        <ModalBody>
        <div >
            <div >
            <br></br>
                    <h1>{t('crearPedido')}</h1>
                    <form onSubmit={onSubmit}>                   
                    <div className="campo-form">
                        <label htmlFor="nombre">{t('tituloPedido')}</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            class="form-control"
                            placeholder={t('TuNombre')}
                            value={CreateOrder.title}
                            onChange={OnChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label>{t('fechaInicio')}: </label>
                        <DatePicker 
                            showTimeSelect
                            dateFormat="dd/mm/yyyy hh:mm:ss"
                            timeIntervals={15}
                            selected={startDateStart} 
                            onChange={date => setStartDateStart(date)} />
                    </div>
                    <div className="campo-form">
                        <label>{t('fechaFin')}: </label>
                        <DatePicker 
                            showTimeSelect
                            dateFormat="dd/mm/yyyy hh:mm:ss"
                            timeIntervals={15}
                            selected={startDateEnd} 
                            onChange={date => setStartDateEnd(date)} />
                    </div>                    
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