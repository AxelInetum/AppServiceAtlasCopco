import React, { Fragment } from 'react';
import NavBars from '../NavBar/NavBars';
import {useDispatch,useSelector} from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { MsalAuthenticationTemplate, useMsal, useAccount } from "@azure/msal-react";
import { InteractionRequiredAuthError, InteractionType } from "@azure/msal-browser";
import { loginRequest, protectedResources } from "../auth/authConfig";
import { callApiWithToken } from "../auth/fetch";
import { ProfileData } from "../auth/DataDisplay";
import {Fillgraphdatauser} from '../../actions/UsersActions';
import jwtDecode from 'jwt-decode';


const MenuInicial = () => {
    const { t} = useTranslation();
    const dispatch = useDispatch()
    const GraphDataUser = useSelector(state => state.UsersReducer.GraphDataUser);
     
    document.body.className = "ImageBackgroundspages";
    const { instance, accounts, inProgress } = useMsal();
    const account = useAccount(accounts[0] || {});


    
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
             { GraphDataUser ?  <h1>{GraphDataUser.tokenType}</h1>: null }
               
             </div>

        </Fragment>
    );
}

export default MenuInicial;

export const Profile = () => {
    const authRequest = {
        ...loginRequest
    };

    return (
        <MsalAuthenticationTemplate 
            interactionType={InteractionType.Redirect} 
            authenticationRequest={authRequest}
        >
            <MenuInicial />
        </MsalAuthenticationTemplate>
      )
};