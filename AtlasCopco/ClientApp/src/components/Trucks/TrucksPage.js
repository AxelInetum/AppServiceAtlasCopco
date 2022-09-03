import React,{Fragment} from 'react';
import ListTruck from './ListTrucks';
import FilterComboTrucks from '../Trucks/FilterComboTrucks';
import NavBars from '../NavBar/NavBars';

const TrucksPage = ({history}) => {
  document.body.className = "ScreenImage";
  return (
    <Fragment>
      <NavBars > </NavBars>
      <FilterComboTrucks></FilterComboTrucks>
      <ListTruck/>
    </Fragment>
  );
}

export default TrucksPage;
