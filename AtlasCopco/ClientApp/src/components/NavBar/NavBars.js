import React,{Fragment,useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMsal } from "@azure/msal-react";

const Navbars = () => {
  const { t} = useTranslation();
  const { instance } = useMsal();
  return (
    <Fragment>
      <div class="margin2">
          <div class="row">
              <div class="col-lg-2 mt-4">
                    <p>logout2</p>
              </div>
              <div class="col-lg-8 mt-4 bg-dark mb-3 rounded">
                      <ul class="fm-nav nav bg-dark text-white justify-content-center">           
                        <li class="nav-item">
                          <Link to={'/TrucksPage'} className="nav-link active fs-3">{t('Camiones')}</Link>
                        </li>
                        <li class="nav-item">
                          <Link to={'/Cars'} className="nav-link active fs-3">{t('Coches')}</Link>
                        </li>
                      </ul>
              </div>
              <div class="col-lg-2 mt-4"> 
                  <button onClick={() => instance.logoutRedirect({ postLogoutRedirectUri: "/" })} ><p>Logout</p></button>
              </div>
          </div>
          <h1 class="tituloedit fs-3">{t('Camiones')}</h1>  
      </div>
    </Fragment>
  );
}

export default Navbars;