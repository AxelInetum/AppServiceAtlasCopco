import {useDispatch,useSelector} from 'react-redux';
import {DeleteTrucks,HiddenDeletePopupTruck} from '../../actions/TruckActions';
import {Button,ModalHeader,Modal,ModalBody,ModalFooter,FormGroup,Input,Label} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import React from 'react';
const DeleteOrder = () => {
    const stateDeletePopup = useSelector(state => state.TrucksReducers.DeleteTruckpopup);
    const idTrucksDeleted = useSelector(state => state.TrucksReducers.idTruckSelected);
    const { t} = useTranslation();
    const dispatch = useDispatch();
    const modalStyle=
    {
        position:"absolute",
        top: '10%',
        left: '30%'       
    }
    const ClosePopupDelete=() => 
    {
        dispatch(HiddenDeletePopupTruck(false)); 
    }
    async function Delete()
    {
        dispatch(DeleteTrucks(idTrucksDeleted,{t}));                 
    }
    return (
        <Modal isOpen={stateDeletePopup} fade={false} style={modalStyle}>
            <ModalHeader ><a class="mover" onClick={() => ClosePopupDelete()}>x</a></ModalHeader>
            <ModalBody> 
                <p id="pdelete">{t('borrarCamiones')}</p>
            </ModalBody>
            <ModalFooter>
            <button id="pdelete" class="btn btn-danger mr-1" onClick={() => Delete()}>Si</button>
            <button id="pdelete" class="btn btn-primary mr-1" onClick={() => ClosePopupDelete()}>no</button>
            </ModalFooter>
        </Modal>
    )
}

export default DeleteOrder;