import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {ModalHeader,Modal,ModalBody} from 'reactstrap';
import Alert from '../Alert/Alert';
import { useTranslation } from 'react-i18next';
import {EditOrders,GetTypesOrders} from '../../actions/OrderActions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';


const EditOrder = ({loadDatas,showEditPopup,setshowEditPopup}) => {
    debugger;
    const dispatch = useDispatch();
    const { t} = useTranslation();

    const [startDateStart, setStartDateStart] = useState(new Date());  
    const [startDateEnd, setStartDateEnd] = useState(new Date()); 
 
    const ListTipyesOrders = useSelector(state => state.OrdersReducer.ListTypesOrders); 

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
    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            backgroundColor: isDisabled ? 'red' : 'blue',
            color: '#FFF',
            cursor: isDisabled ? 'not-allowed' : 'default',
          };
        },
      };

    const handleChange = e => {
        loadDatas.value = e.value;
    }

    useEffect(() => {  
        dispatch(GetTypesOrders({t}));
      },[]);

   
    const onSubmit = e =>
    { 
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
                            dateFormat="dd/MM/yyyy hh:mm:ss"
                            timeIntervals={15}
                            selected={loadDatas.Start} 
                            onChange={date => setStartDateStart(date)} />
                    </div>
                    <div className="campo-form">
                        <label>{t('fechaFin')}: </label>
                        <DatePicker 
                            showTimeSelect
                            dateFormat="dd/MM/yyyy hh:mm:ss"
                            timeIntervals={15}
                            selected={loadDatas.End} 
                            onChange={date => setStartDateEnd(date)} />
                    </div>   
                    <div className="campo-form">
                        <label>{t('tipopedido')}: </label>
                        <Select 
                        name='combovalue'
                        id='combovalue'
                        defaultValue={{ label: loadDatas.Label, value: loadDatas.Value}}
                        onChange={handleChange}
                        options={ListTipyesOrders} />
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