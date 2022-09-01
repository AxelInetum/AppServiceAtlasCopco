import {
    LOGIN_USER,
} from '../Types';

import UserServices from '../Services/UserService';
import Alert from '../components/Alert/Alert';

export function LoginUserLdap(UsersData,history,{t}){
   return async (dispatch) =>{      
        const p = Promise.resolve( new UserServices().loginldap(UsersData));
        p.then(response => {
            debugger;
            if (response.value.messageLogin == 'OK000')
            {
                dispatch(loginldap(response.value));
                history.push("/MenuInicial"); 
            }
            else{   
                 if(response.value.messageLogin == 'KO050')
                 {
                    Alert(t('credencialesnoCorrectas'),t('contacteadministrador'),'error');
                                
                } 
                 else{

                 }     Alert(t('errordeconexion'),t('contacteadministrador'),'error');          
            }    
        });                     
   }
}

const loginldap = (newState) =>({
    type:LOGIN_USER,
    payload:newState
});



