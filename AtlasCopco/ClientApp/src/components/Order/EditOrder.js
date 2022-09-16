import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {ModalHeader,Modal,ModalBody} from 'reactstrap';
import Alert from '../Alert/Alert';
import { useTranslation } from 'react-i18next';
import {EditOrders,GetTypesOrders,PopupEditorderCalendar} from '../../actions/OrderActions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import moment from 'moment';
import { format } from 'date-fns';


const EditOrder = ({loadDatas,showEditPopup}) => {
    debugger;
    const dispatch = useDispatch();
    const { t} = useTranslation();
    const ListTipyesOrders = useSelector(state => state.OrdersReducer.ListTypesOrders); 
    const [EditOrder,SetEditOrder] = useState({
        id: 0,
        title:'',
        Start:'',
        End:'',
        UpdaterOrder:0,
        Label: '',
        Value:'',
        backgroundColor:''
    });

   const modalStyle=
   {
        position:"absolute",
        top: '10%',
        left: '30%'       
   }
    const ClosePopup=() => 
    {
        dispatch(PopupEditorderCalendar(false));
    } 

    const setStartDateStart = e => {
        SetEditOrder({
            ...EditOrder,
            'Start' : e
        })
    }

    const setStartDateEnd = e => {
        SetEditOrder({
            ...EditOrder,
            'End' : e
        })
    }

    const OnChange = e => 
    {
        SetEditOrder({
            ...EditOrder,
            [e.target.name] : e.target.value
        })
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
        SetEditOrder({
            ...EditOrder,
            'Label': e.label
            
        })
    
        SetEditOrder({
            ...EditOrder,
            'Value' : e.value
        })
    }

    useEffect(() => { 

        dispatch(GetTypesOrders({t}));
      },[]);

      useEffect(() => { 
        debugger;
        EditOrder.id = loadDatas.id;
        EditOrder.title= loadDatas.title;
        EditOrder.Start= loadDatas.Start;
        EditOrder.End= loadDatas.End;
        EditOrder.UpdaterOrder= 0;
        EditOrder.Label= loadDatas.Label;
        EditOrder.Value= loadDatas.Value;
        EditOrder.backgroundColor= loadDatas.backgroundColor;
      },[loadDatas.id]);

    const onSubmit = e =>
    { 
        e.preventDefault();
        if(EditOrder.title.trim() === '' )
        {
            Alert(t('camposobligatorios') ,t('nosehainsertado'),"error");
        }
        else
        {  
            debugger;
            dispatch(EditOrders(EditOrder,{t}));                               
        }
    }

    const FormatDate = (date) =>
    {
         debugger;
         if (date != "" && date!= undefined)
         {
            var yearmonthday = (new Date(date)).toISOString().slice(0, 10).split("-");
            var hourminutes =date.toGMTString().split(" ")[4].split(':');
           
            var year =parseInt(yearmonthday[0]);
            var month = parseInt(yearmonthday[1])-1;
            var day = parseInt(yearmonthday[2]);
            var hour =parseInt(hourminutes[0]);
            var minutes = parseInt(hourminutes[1]);
            debugger;
            var axel = new Date(year, month, day, hour, minutes );
            return new Date(year, month, day, hour, minutes );
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
                            value={EditOrder == undefined ? "" : EditOrder.title}
                            onChange={OnChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label>{t('fechaInicio')}: </label>
                        <DatePicker 
                            name='Start'
                            showTimeSelect
                            dateFormat="dd/MM/yyyy HH:mm"
                            timeFormat="HH:mm"
                            timeIntervals={15} 
                            tim                
                            selected={EditOrder == undefined ? "" : EditOrder.Start}  
                            onChange={setStartDateStart} />
                    </div>
                    <div className="campo-form">
                        <label>{t('fechaFin')}: </label>
                        <DatePicker 
                            name='End'
                            showTimeSelect
                            dateFormat="dd/MM/yyyy HH:mm"
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            selected={EditOrder == undefined ? "" : EditOrder.End} 
                            onChange={setStartDateEnd} />
                    </div> 
                    <div className="campo-form">
                        <label>{t('tipopedido')}: </label>
                        <Select 
                        name='combovalue'
                        id='combovalue'
                        defaultValue={{ label: EditOrder == undefined ? "" : EditOrder.Label, value: EditOrder == undefined ? "" : EditOrder.Value}}
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