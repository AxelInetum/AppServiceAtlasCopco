import {
    FILL_GRAPHDATA_USER,
} from '../Types';

export function Fillgraphdatauser(UsersData){
    return (dispatch) =>{
        dispatch(fillgraphdatauser(UsersData));
    }
}

const fillgraphdatauser = (UsersData) =>({
    type:FILL_GRAPHDATA_USER,
    payload:UsersData
});



