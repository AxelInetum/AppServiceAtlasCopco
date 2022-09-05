import React, { Fragment } from 'react';
import NavBars from '../NavBar/NavBars';
import {useSelector} from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { MsalAuthenticationTemplate, useMsal, useAccount } from "@azure/msal-react";
import { InteractionRequiredAuthError, InteractionType } from "@azure/msal-browser";
import { loginRequest, protectedResources } from "../auth/authConfig";
import { callApiWithToken } from "../auth/fetch";
import { ProfileData } from "../auth/DataDisplay";


const MenuInicial = () => {
    const { t} = useTranslation();
    const datauserloginLdpa = useSelector(state => state.UsersReducer.dataUserLoginldpa);
    document.body.className = "ImageBackgroundspages";
    const { instance, accounts, inProgress } = useMsal();
    const account = useAccount(accounts[0] || {});
    const [graphData, setGraphData] = useState(null);
    
    useEffect(() => {
        debugger;
        if (account && inProgress === "none" && !graphData) {
            instance.acquireTokenSilent({
                scopes: protectedResources.graphMe.scopes,
                account: account
            }).then((response) => {
                callApiWithToken(response.accessToken, protectedResources.graphMe.endpoint)
                    .then(response => setGraphData(response));
            }).catch((error) => {
                // in case if silent token acquisition fails, fallback to an interactive method
                if (error instanceof InteractionRequiredAuthError) {
                    if (account && inProgress === "none") {
                        instance.acquireTokenPopup({
                            scopes: protectedResources.graphMe.scopes,
                        }).then((response) => {
                            callApiWithToken(response.accessToken, protectedResources.graphMe.endpoint)
                                .then(response => setGraphData(response));
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
                { graphData ? <ProfileData graphData={graphData} /> : null }
                {datauserloginLdpa.permisions.indexOf("Admin") > -1 ? (<h1 class="centertext entertextsize">Test Inetum eres administrador</h1>) : (<h1 class="centertext entertextsize">Test Inetum no eres administrador</h1>)}
             </div>ng

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