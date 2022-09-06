import React, { Fragment } from 'react';
import NavBars from '../NavBar/NavBars';
import {useDispatch,useSelector} from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { useMsal, useAccount } from "@azure/msal-react";
import { InteractionRequiredAuthError, InteractionType } from "@azure/msal-browser";
import { protectedResources } from "../auth/authConfig";
import {Fillgraphdatauser} from '../../actions/UsersActions';

const MenuInicial = () => {
    const {t,i18n} = useTranslation();
    const dispatch = useDispatch();
    const GraphDataUser = useSelector(state => state.UsersReducer.GraphDataUser);    
    document.body.className = "ImageBackgroundspages";
    const { instance, accounts, inProgress } = useMsal();
    const account = useAccount(accounts[0] || {});

    useEffect(() => { 
        i18n.changeLanguage(localStorage.getItem("lenguage"));
    },[]);

    useEffect(() => {
        if (account && inProgress === "none") {
            instance.acquireTokenSilent({
                scopes: protectedResources.graphMe.scopes,
                account: account
            }).then((response) => {  
                dispatch(Fillgraphdatauser(response));
            }).catch((error) => {
                // in case if silent token acquisition fails, fallback to an interactive method
                if (error instanceof InteractionRequiredAuthError) {
                    if (account && inProgress === "none") {
                        instance.acquireTokenPopup({
                            scopes: protectedResources.graphMe.scopes,
                        }).then((response) => {
                            dispatch(Fillgraphdatauser(response));
                        }).catch(error => console.log(error));
                    }
                }
            });
        }
    }, [account, inProgress, instance]);

    return (
        <Fragment>
            <div>
             <NavBars></NavBars>         
             { GraphDataUser ?  <h1>rol1: {GraphDataUser.idTokenClaims.roles[0]}</h1>:null}
             { GraphDataUser ?  <h1>rol2: {GraphDataUser.idTokenClaims.roles[1]}</h1>:null}
            
             </div>

        </Fragment>
    );
}

export default MenuInicial;