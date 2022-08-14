import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers';


const reducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer,
});

export default store;
