import {createSlice} from '@reduxjs/toolkit';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: '2023-01-24',
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: '2023-01-20',
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: '2023-01-17',
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: '2022-02-19',
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.59,
    date: '2022-02-18',
  },
  {
    id: 'e6',
    description: 'A pair of trousers',
    amount: 89.29,
    date: '2023-01-05',
  },
  {
    id: 'e7',
    description: 'Some bananas',
    amount: 5.99,
    date: '2023-01-18',
  },
  {
    id: 'e8',
    description: 'A book',
    amount: 14.99,
    date: '2022-02-19',
  },
  {
    id: 'e9',
    description: 'Another book',
    amount: 18.59,
    date: '2023-02-18',
  },
];

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState: DUMMY_EXPENSES,
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    modifyExpense: (state, action) => {
      for (const expense of state) {
        if (expense.id === action.payload.id) {
          expense.description = action.payload.description;
          expense.amount = action.payload.amount;
          expense.date = action.payload.date;
        }
        break;
      }
    },
    deleteExpense: (state, action) => {
      return state.filter(expense => expense.id != action.payload);
    },
  },
});

export const selectExpenses = state => state.expenses;
export const {addExpense, modifyExpense, deleteExpense} = expensesSlice.actions;

export default expensesSlice.reducer;
