import React from 'react';
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuentaUsuario from './components/auth/NuevaCuentaUsuario';
import MenuInicial from './components/menu/MenuInicial';
import Cars from './components/Cars/Cars';
import TrucksPage from './components/Trucks/TrucksPage';
import CreateTrucks from './components/Trucks/CreateTrucks';
import EditTruck from './components/Trucks/EditTruck';
import ListTrucks from './components/Trucks/ListTrucks';
import CalendarPage from './components/Calendar/CalendarPage';
import Navbars from './components/NavBar/NavBars';
import history from './components/history/history';
import {Provider} from 'react-redux';
import store from './store';
import { MsalProvider } from "@azure/msal-react";
import 'bootstrap/dist/css/bootstrap.min.css';
function App({instance}){
    return(
        <Router>  
                <MsalProvider instance={instance}>
                    <Provider store ={store}>        
                        <Routes>
                            <Route exact path="/" element ={<Login></Login>} history={history}/>
                            <Route exact path="/Nueva-Cuenta-Usuario" element ={<NuevaCuentaUsuario></NuevaCuentaUsuario>}  />
                            <Route exact path="/MenuInicial" element ={<MenuInicial></MenuInicial>}  />
                            <Route exact path="/Cars" element ={<Cars></Cars>}  />
                            <Route exact path="/TrucksPage" element ={<TrucksPage></TrucksPage>}  />
                            <Route exact path="/CalendarPage" element ={<CalendarPage></CalendarPage>}  />
                            <Route exact path="/CreateTrucks" element ={<CreateTrucks></CreateTrucks>}  />
                            <Route exact path="/EditTruck/:id" element ={<EditTruck></EditTruck>}  />
                            <Route element ={<Navbars></Navbars>}  />
                            <Route element={<ListTrucks></ListTrucks>}  />
                        </Routes>
                    </Provider> 
                </MsalProvider>
        </Router>
    )
}

export default App;
