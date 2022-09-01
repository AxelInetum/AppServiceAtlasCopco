import React,{Fragment,useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Navbars = () => {
  const { t} = useTranslation();
  return (
    <Fragment>
      <div class="container margin2">
       	<div class="col-12 mt-4 bg-dark mb-3 rounded">
            <ul class="fm-nav nav bg-dark text-white justify-content-center">           
              <li class="nav-item">
                 <Link to={'/TrucksPage'} className="nav-link active">{t('Camiones')}</Link>
              </li>
              <li class="nav-item">
                 <Link to={'/Cars'} className="nav-link active">{t('Coches')}</Link>
              </li>
            </ul>
         </div>
         <h1 class="tituloedit">{t('Camiones')}</h1>  
      </div>
    </Fragment>
  );
}

export default Navbars;