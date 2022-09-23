
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {useDispatch,useSelector} from 'react-redux';
import {UpdateListTrucks,PopupFilterTruck} from '../../actions/TruckActions';
import FilterComboTrucks from './FilterComboTrucks';

const FiltersTruck= () => {
    const { t} = useTranslation();
    const dispatch = useDispatch();
    const ListTrucksInit = useSelector(state => state.TrucksReducers.ListTrucks2);

    const [FiltersTruck,setFiltersTruck] = useState({
        matriculafiltro:'',
        modelofiltro:''
    });

    const OnChange = e => 
    {
        setFiltersTruck({
            ...FiltersTruck,
            [e.target.name] : e.target.value
        })
    }
    
    useEffect(() => 
    {  
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
    },[FiltersTruck]);

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
                 

                    <div class="col-sx-12 col-sm-3 mb-3 d-flex justify-content-between p-0">
                    <button class="btn btn-primary mr-1" onClick={() => OpenPopupFilter()}>hola</button>              
                        <div class="col-12">
                            <label class="d-inline fs-3">{t('Matricula')}</label>
                            <input 
                            type="text" 
                            name="matriculafiltro"
                            class="form-control fs-3" 
                            id="matricula" 
                            placeholder={t('IntroducirMatricula')}
                            value={FiltersTruck.matriculafiltro}
                            onChange={OnChange}
                        />
                        </div>	
                        <div class="col-12">
                            <label class="d-inline fs-3">{t('Modelo')}</label>
                            <input type="text"
                            class="form-control fs-3" 
                            name="modelofiltro"
                            id="modelo" 
                            placeholder={t('IntroducirModelo')}
                            value={FiltersTruck.modelofiltro}
                            onChange={OnChange}                  
                        />
                        </div>										
                    </div> 
       
            </div>
            
            <FilterComboTrucks></FilterComboTrucks>
        </div>    
    );
}

export default FiltersTruck;
