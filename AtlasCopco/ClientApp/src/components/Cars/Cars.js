import React,{Fragment} from 'react';
import NavBars from '../NavBar/NavBars';


const BasicTable = () => {
  document.body.className = "ScreenImage";
  return (
    <Fragment>
     <NavBars > </NavBars>
     <h1>Coches</h1>
     <div class="container">
    <table class="table">
    <thead class="table-dark">
      <tr class="fs-3">
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
    <tr class="fs-3">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr class="fs-3">
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr class="fs-3">
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
  
  <table class="table">
    <thead class="table-warning">
      <tr class="fs-3">
        <th  scope="col">#</th>
        <th  scope="col">First</th>
        <th  scope="col">Last</th>
        <th  scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
    <tr class="fs-3">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr class="fs-3">
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr class="fs-3">
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
  </div>
  </Fragment>
  );
}

export default BasicTable;
