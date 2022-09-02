
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {useDispatch,useSelector} from 'react-redux';
import {PopupFilterTruck,UpdateListTrucks} from '../../actions/TruckActions';
import {Button,ModalHeader,Modal,ModalBody,ModalFooter,FormGroup,Input,Label} from 'reactstrap';

const FilterComboTrucks= () => {
    const { t} = useTranslation();
    const dispatch = useDispatch();
    const ListTrucksInit = useSelector(state => state.TrucksReducers.ListTrucks2);
    const showFilterTruckpopup = useSelector(state => state.TrucksReducers.PopupFilter);
    
    const [FilterTruck,setFiltersTruck] = useState({
        valueComboFilterTruck:'',
        valueFilter:''
    });

    useEffect(() => 
    {  
        FilterTrucks();
    },[FilterTruck]);
    

    const FilterTrucks=() => 
    {
        const selectedTruckFilter = document.getElementById("comboTruckFilter"); // or this if only called onchange
        const intputTruckFilter = document.getElementById("valueFilter");
        if (selectedTruckFilter != undefined && intputTruckFilter !=undefined)
        {
            let value = selectedTruckFilter.options[selectedTruckFilter.selectedIndex].value;
            FilterTruck.valueComboFilterTruck = value;      
            FilterTruck.valueFilter = intputTruckFilter.value;
            dispatch(UpdateListTrucks(SwitchFilterTrucks(FilterTruck,ListTrucksInit)));
        } 
    }

    const SwitchFilterTrucks=(FilterTruck,ListTrucksInit) => 
    {
        const ListTrucks = ListTrucksInit;

        if (FilterTruck.valueFilter !="")
        {
            switch (FilterTruck.valueComboFilterTruck) {
            case 'M':
                return  ListTrucksInit.filter(truck => truck.marca ==FilterTruck.valueFilter);
                break
            case 'MO':
                return ListTrucksInit.filter(truck => truck.modelo ==FilterTruck.valueFilter);
                break
            case 'MA':
                return ListTrucksInit.filter(truck => truck.matricula ==FilterTruck.valueFilter);
                break
            default:
                return ListTrucksInit;
            }
        }
        return ListTrucksInit;
    }

    const handleChange = e => 
    {
        setFiltersTruck({
            ...FilterTruck,
            [e.target.name] : e.target.value
        }) 
    }
    const modalStyle=
    {
        position:"absolute",
        top: '25%',
        left: '15%'       
    }

    const Combovalues = [
        { text: t('Marca'), value: "M"},
        { text: t('Modelo'), value: "MO"},
        { text: t('Matricula'), value:"MA" },
        { text: t('Administrar'), value: "AD" }
    ];

    const CrossPopupFilter = () => 
    {
        setFiltersTruck({
            ...FilterTruck,
            'valueFilter' : ''
        }) 
    }

    const ClosePopupFilter=() => 
    {
        dispatch(PopupFilterTruck(false)); 
    }

    const OpenPopupFilter=() => 
    {
        dispatch(PopupFilterTruck(true)); 
    } 
    
    return (
        <div class="container">
            <div class="row">
                    <div class="col-sx-12 col-sm-3 mb-4">
                        <Link to={'/CreateTrucks'} className="btn btn-primary bt-lg mb-2 fs-3">{t('CrearCamion')}</Link>    
                    </div>
                    <div class="col-sx-12 col-sm-3 mb-4">
                        <button class="btn btn-primary mr-1" onClick={() => OpenPopupFilter()}>hola</button> 
                    <div>
        
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
                                                    <a onClick={() => CrossPopupFilter()}>x</a>
                                                </div>
                                                <div class="col-10"> 
                                                <select class="form-select" 
                                                    name="valueComboFilterTruck"
                                                    defaultValue={FilterTruck.valueComboFilterTruck}
                                                    id="comboTruckFilter"
                                                    onChange={handleChange}>                                       
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
                                                id="valueFilter"
                                                name="valueFilter"
                                                class="form-control"
                                                placeholder={t('IntroducirMarca')}
                                                value={FilterTruck == undefined ? "" : FilterTruck.valueFilter}
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
            </div>
            </div>
            </div>
        </div>
    );
}

export default FilterComboTrucks;