
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
        top: '25%',
        left: '15%'       
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
            <div class="row">
                  <div class="col-12">
                   <div class="row">
                        <div class="col-4"> 
                           <div class="row" >
                                <div class="col-12 filterTextPopupTruckFilter"> 
                                    <p>Filtro</p>
                                </div>
                                <div class="col-12"> 
                                    <div class="row">
                                        <div class="col-1"> 
                                            <a onClick={() => ClosePopupFilter()}>x</a>
                                        </div>
                                        <div class="col-10"> 
                                        <select class="form-select" onChange={handleChange}>
                                                {Combovalues.map((option, index) =>
                                                <option key={index} value={option.value}>
                                                    {option.text}
                                                </option>
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="row" >
                                <div class="col-12"> 
                                    <p>Valor</p>
                                </div>
                                <div class="col-12"> 
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
                    </div>
                 </div>                                 
            </div>
        </div>
        </ModalBody>
        </Modal>  
    );
}

export default FilterComboTrucks;