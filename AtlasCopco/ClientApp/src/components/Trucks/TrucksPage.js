import React,{Fragment} from 'react';
import ListTruck from './ListTrucks';
import FiltersTruck from './FiltersTruck';
import NavBars from '../NavBar/NavBars';

const TrucksPage = ({history}) => {
  document.body.className = "ScreenImage";
  return (
    <Fragment>
      <NavBars > </NavBars>
      <FiltersTruck/>
      <ListTruck/>
    </Fragment>
  );
}

export default TrucksPage;
