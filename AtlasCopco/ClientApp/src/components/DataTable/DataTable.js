import React, { useEffect, useState, useMemo } from "react";
import { TableHeader, Pagination } from "../DataTable/index";
import { useTranslation } from 'react-i18next';
import { FaTrashAlt,FaEdit } from 'react-icons/fa';
import {useDispatch,useSelector} from 'react-redux';
import EditTruck from '../Trucks/EditTruck';
import DeleteTruck from '../Trucks/DeleteTruck';
import {ShowEditPopupTruck,GetlistTrucks,ShowDeletePopupTruck,SetIdTruckselected} from '../../actions/TruckActions'

const DataTable = () => {
    debugger;
    const { t} = useTranslation();
    const dispatch = useDispatch();
    const ListTrucks = useSelector(state => state.TrucksReducers.ListTrucks);
    const [comments, setComments] = useState([]);

    const AbrirModal=(id)=> {
        dispatch(ShowEditPopupTruck(true));
        dispatch(SetIdTruckselected(id));
    }
    
    const AbrilModalDelete=(id)=> {
        dispatch(ShowDeletePopupTruck(true));
        dispatch(SetIdTruckselected(id));
    }

    
   // const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const ITEMS_PER_PAGE = 2;

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


    const commentsData = useMemo(() => {
        let computedComments = ListTrucks;

        if (search) {
            computedComments = computedComments.filter(
                comment =>
                    comment.name.toLowerCase().includes(search.toLowerCase()) ||
                    comment.email.toLowerCase().includes(search.toLowerCase())
            );
        }

        setTotalItems(computedComments.length);

        //Sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [ListTrucks, currentPage, search, sorting]);

    return (
        <>
            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div className="row">
                      
               
                        <div className="col-md-6 d-flex flex-row-reverse">
            
                        </div>
                    </div>

                    <table class="table table-hover table-responsive-sm">
                        <TableHeader
                            headers={headers}
                            onSorting={(field, order) =>
                                setSorting({ field, order })
                            }
                        />
                        <tbody>
                            {commentsData.map(comment => (
                            <tr>
                                    <td>
                                        {comment.nombre}
                                    </td>
                                    <td>
                                        {comment.marca}
                                    </td>
                                    <td>
                                        {comment.modelo}
                                    </td>
                                    <td>
                                        {comment.matricula}
                                    </td>
                                    <td>
                                    
                                        <button class="btn btn-primary mr-1" onClick={() => AbrirModal(comment.id)}><FaEdit /></button>              
                                        <button class="btn btn-danger mr-1" onClick={() => AbrilModalDelete(comment.id)}><FaTrashAlt /></button>
                                
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                            <Pagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                    </div>
                </div>
                <EditTruck listTrucks={ListTrucks}/> 
                <DeleteTruck 
                 currentPage={currentPage}
                 setCurrentPage={setCurrentPage}
                />
            </div>
          
        </>
    );
};

export default DataTable;