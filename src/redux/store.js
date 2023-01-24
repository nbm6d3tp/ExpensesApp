import {configureStore} from '@reduxjs/toolkit';
import expensesReducer from './expensesSlice';

export default configureStore({
  reducer: {
    expenses: expensesReducer,
  },
});
