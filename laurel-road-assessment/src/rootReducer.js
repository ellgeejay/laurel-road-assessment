import { combineReducers } from '@reduxjs/toolkit';
import formReducer from './features/formSlice.js';

const rootReducer = combineReducers({
  form: formReducer,
});

export default rootReducer;
