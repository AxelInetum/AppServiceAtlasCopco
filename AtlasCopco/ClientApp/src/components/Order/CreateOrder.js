import React ,{useState} from 'react';
import { useTranslation } from 'react-i18next';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch,useSelector} from 'react-redux';
import Alert from '../Alert/Alert';
import {CreateOrders,PopupEditorderCalendar,PopupCreateCalendar} from '../../actions/OrderActions';
import {ModalHeader,Modal,ModalBody} from 'reactstrap';
import Select from 'react-select';

const CreateOrder = ({showCreatePopup}) => {
    const dispatch = useDispatch();
    const { t} = useTranslation();
    const [CreateOrder,SetOrder] = useState({
        id:0,
        title:'',
        Start:'',
        End:'',
        Value:0,
        createdOrder:0,
        backgroundColor:''
    });
    const [startDateStart, setStartDateStart] = useState();  
    const [startDateEnd, setStartDateEnd] = useState();  
    const ListTipyesOrders = useSelector(state => state.OrdersReducer.ListTypesOrders); 
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
        dispatch(PopupCreateCalendar(false));
    }
    const modalStyle=
    {
        position:"absolute",
        top: '10%',
        left: '30%'       
    }
    
    const handleChange = e => {
        CreateOrder.value = e.value;
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
            CreateOrder.Start = FormatDate(startDateStart); 
            CreateOrder.End =  FormatDate(startDateEnd);
            CreateOrder.backgroundColor =  'red';
            dispatch(CreateOrders(CreateOrder,{t}));                                             
        }    
    }
   
    function FormatDate(date)
    {
        return date.getFullYear()  + '-' +  (date.getDate() < 10 ? '0' + date.getDate():date.getDate()) + '-'+ ((date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1):(date.getMonth()+1)) + ' ' + (date.getHours() < 10 ? '0' + date.getHours():date.getHours())  + ':' +  (date.getMinutes() < 10 ? '0' + date.getMinutes():date.getMinutes());
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
                            dateFormat="dd/MM/yyyy hh:mm:ss aa"
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            selected={startDateStart} 
                            onChange={date => setStartDateStart(date)} 
                            />
                    </div>
                    <div className="campo-form">
                        <label>{t('fechaFin')}: </label>
                        <DatePicker 
                            showTimeSelect
                            dateFormat="dd/MM/yyyy hh:mm:ss aa"
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            selected={startDateEnd} 
                            onChange={date => setStartDateEnd(date)} />
                    </div> 
                    <div className="campo-form">
                        <label>{t('tipopedido')}: </label>
                        <Select 
                         name='comboCreatevalue'
                         id='comboCreatevalue'
                        onChange={handleChange}
                        options={ListTipyesOrders} />
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