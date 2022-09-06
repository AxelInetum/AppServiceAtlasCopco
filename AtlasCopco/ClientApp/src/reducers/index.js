import {combineReducers} from 'redux';
import trucksReducer from './TrucksReducer';
import usersReducer from './UsersReducer';



export default combineReducers({
       TrucksReducers: trucksReducer,
       UsersReducer:usersReducer
});
