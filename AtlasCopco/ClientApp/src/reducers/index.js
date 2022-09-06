import {combineReducers} from 'redux';
import trucksReducer from './TrucksReducer';
import usersReducer from './UsersReducer';
import orderReducer from './OrdersReducer';


export default combineReducers({
       TrucksReducers: trucksReducer,
       UsersReducer:usersReducer,
       OrdersReducer:orderReducer
});
