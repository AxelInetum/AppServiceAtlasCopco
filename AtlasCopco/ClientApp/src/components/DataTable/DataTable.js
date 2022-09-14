import React, { useEffect} from "react";
import { useTranslation } from 'react-i18next';
import { FaTrashAlt,FaEdit } from 'react-icons/fa';
import {useDispatch,useSelector} from 'react-redux';
import EditTruck from '../Trucks/EditTruck';
import DeleteTruck from '../Trucks/DeleteTruck';
import {ShowEditPopupTruck,GetlistTrucks,ShowDeletePopupTruck,SetIdTruckselected} from '../../actions/TruckActions'

const DataTable = () => {
    const { t} = useTranslation();
    const dispatch = useDispatch();
    const ListTrucks = useSelector(state => state.TrucksReducers.ListTrucks);


    const AbrirModal=(id)=> {
        dispatch(ShowEditPopupTruck(true));
        dispatch(SetIdTruckselected(id));
    }
    
    const AbrilModalDelete=(id)=> {
        dispatch(ShowDeletePopupTruck(true));
        dispatch(SetIdTruckselected(id));
    }

    const headers = [
        { name: t('Camiones'), field: t('Camiones'), sortable: true },
        { name: t('Marca'), field: t('Marca'), sortable: true },
        { name: t('Modelo'), field: t('Modelo'), sortable: true },
        { name: t('Matricula'), field: t('Matricula'), sortable: true },
        { name: t('Administrar'), field: t('Administrar'), sortable: false }
    ];

    useEffect(() => {
     dispatch(GetlistTrucks(true,{t}));
   },[]);


    return (
        <>
            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div className="row">
                      
               
                        <div className="col-md-6 d-flex flex-row-reverse">
            
                        </div>
                    </div>
                    <div class="scrolldataTable">
                    <table class="table table-hover table-responsive-sm">
                        <thead class="sticky-top thead-dark bg-dark text-white">
                            <tr >
                                {headers.map(({ name}) => (
                                    <th key={name}>
                                        {name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
             
                        <tbody>
                                {ListTrucks.map(truck => (
                                <tr class="fs-3">
                                        <td>
                                            {truck.nombre}
                                        </td>
                                        <td>
                                            {truck.marca}
                                        </td>
                                        <td>
                                            {truck.modelo}
                                        </td>
                                        <td>
                                            {truck.matricula}
                                        </td>
                                        <td>
                                        
                                            <button class="btn btn-primary mr-1" onClick={() => AbrirModal(truck.id)}><FaEdit /></button>              
                                            <button class="btn btn-danger mr-1" onClick={() => AbrilModalDelete(truck.id)}><FaTrashAlt /></button>
                                    
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
                </div>   
                </div>         
                <EditTruck listTrucks={ListTrucks}/> 
                <DeleteTruck />
            </div>
          
        </>
    );
};

export default DataTable;