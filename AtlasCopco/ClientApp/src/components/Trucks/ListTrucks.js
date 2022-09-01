import React,{Fragment,useEffect} from 'react';
import DataTable from '../DataTable/DataTable';

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