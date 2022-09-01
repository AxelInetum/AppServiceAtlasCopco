import React,{Fragment,useEffect} from 'react';
import DataTable from '../DataTable/DataTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListTrucks = () => {
  debugger;
    return (
        <Fragment>
        <div class="container">    
          <DataTable
           data={ListTrucks}
          ></DataTable>
        </div>
        </Fragment>
    );
}

export default ListTrucks;