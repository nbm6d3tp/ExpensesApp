import axios from 'axios';

const BACKEND_URL =
  'https://expensesapp-782b7-default-rtdb.europe-west1.firebasedatabase.app';

export async function addExpenseDatabase(expenseData) {
  const id = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
  return id.data.name;
}

export async function fetchExpenses() {
  const expenses = await axios.get(BACKEND_URL + '/expenses.json');
  const expensesData = [];
  for (const expense in expenses.data) {
    expensesData.push({
      id: expense,
      ...expenses.data[expense],
    });
  }
  return expensesData;
}

export function deleteExpensesDatabase(idExpense) {
  axios.delete(BACKEND_URL + `/expenses/${idExpense}.json`);
}
export function editExpensesDatabase(idExpense, expenseData) {
  axios.put(BACKEND_URL + `/expenses/${idExpense}.json`, expenseData);
}
