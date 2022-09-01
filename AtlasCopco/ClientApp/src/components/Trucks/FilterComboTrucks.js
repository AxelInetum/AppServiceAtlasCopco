
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {useDispatch,useSelector} from 'react-redux';
import {PopupFilterTruck} from '../../actions/TruckActions';
import {Button,ModalHeader,Modal,ModalBody,ModalFooter,FormGroup,Input,Label} from 'reactstrap';

const FilterComboTrucks= () => {
    const { t} = useTranslation();
    const dispatch = useDispatch();
    const ListTrucksInit = useSelector(state => state.TrucksReducers.ListTrucks2);
    const showFilterTruckpopup = useSelector(state => state.TrucksReducers.PopupFilter);
    useEffect(() => 
    {  

        /*
         let ListTrucksfilter =ListTrucksInit;
         if (FiltersTruck.matriculafiltro !='')
         {
            ListTrucksfilter = ListTrucksfilter.filter(truck => truck.matricula == FiltersTruck.matriculafiltro)
         }
         if (FiltersTruck.modelofiltro !='')
         {
            ListTrucksfilter = ListTrucksfilter.filter(truck => truck.modelo == FiltersTruck.modelofiltro)
         }
         dispatch(UpdateListTrucks(ListTrucksfilter));   
         */ 
    },[]);

    const handleChange = e => 
    {
     
    }
    const modalStyle=
    {
        position:"absolute",
        top: '10%',
        left: '30%'       
    }

    const Combovalues = [
        { text: t('Camiones'), value: "C" },
        { text: t('Marca'), value: "M"},
        { text: t('Modelo'), value: "MO"},
        { text: t('Matricula'), value:"MA" },
        { text: t('Administrar'), value: "AD" }
    ];

    const ClosePopupFilter=() => 
    {
        dispatch(PopupFilterTruck(false)); 
    }
    
    return (
        <Modal isOpen={showFilterTruckpopup} fade={false} style={modalStyle}>
        <ModalHeader ><a class="mover" onClick={() => ClosePopupFilter()}>x</a></ModalHeader>
        <ModalBody>
        <div >
            <div >
            <br></br>
                   <h1>Filtro</h1>
                   <select onChange={handleChange}>
                        {Combovalues.map((option, index) =>
                        <option key={index} value={option.value}>
                            {option.text}
                        </option>
                        )}
                    </select>
                    <div className="campo-form">
                        <label htmlFor="marca">Filtro</label>
                        <input
                            type="text"
                            id="marca"
                            name="marca"
                            class="form-control"
                            placeholder={t('IntroducirMarca')}
                            value={""}
                            onChange={handleChange}
                        />
                    </div>                                    
            </div>
        </div>
        </ModalBody>
        </Modal>  
    );
}

export default FilterComboTrucks;