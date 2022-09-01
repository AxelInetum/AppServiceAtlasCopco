import React, { Fragment } from 'react';
import NavBars from '../NavBar/NavBars';
import {useSelector} from 'react-redux';
import { useTranslation } from 'react-i18next';

const MenuInicial = () => {
    const { t} = useTranslation();
    const datauserloginLdpa = useSelector(state => state.UsersReducer.dataUserLoginldpa);
    document.body.className = "ImageBackgroundspages";
    debugger;
    return (
        <Fragment>
            <div>
             <NavBars></NavBars>
    
                {datauserloginLdpa.permisions.indexOf("Admin") > -1 ? (<h1 class="centertext entertextsize">Test Inetum eres administrador</h1>) : (<h1 class="centertext entertextsize">Test Inetum no eres administrador</h1>)}
             </div>ng

        </Fragment>
    );
}

export default MenuInicial;