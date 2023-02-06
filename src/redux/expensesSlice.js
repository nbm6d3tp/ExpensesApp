import {createSlice} from '@reduxjs/toolkit';

const EXPENSES = [];

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState: EXPENSES,
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    setExpenses: (state, action) => {
      return action.payload;
    },
    modifyExpense: (state, action) => {
      state[state.findIndex(expense => expense.id === action.payload.id)] =
        action.payload;
    },
    deleteExpense: (state, action) => {
      state.splice(
        state.findIndex(expense => expense.id === action.payload),
        1,
      );
    },
  },
});

export const selectExpenses = state => state.expenses;
export const {addExpense, modifyExpense, deleteExpense, setExpenses} =
  expensesSlice.actions;

export default expensesSlice.reducer;
