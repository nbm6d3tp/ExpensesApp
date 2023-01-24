import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExpensesHeader from './ExpensesHeader';
import ExpensesList from './ExpensesList';
import {useSelector} from 'react-redux';
import {selectExpenses} from '../redux/expensesSlice';
import {colors} from '../constants/colors';

const ExpensesOutput = ({recent}) => {
  let expenses;
  if (!recent) {
    expenses = useSelector(selectExpenses);
  } else {
    expenses = useSelector(selectExpenses).filter(expense => {
      const nbMillseconds =
        new Date().getTime() - new Date(expense.date).getTime();
      return nbMillseconds <= 604800000 && nbMillseconds >= 0;
    });
  }
  const total = expenses
    .reduce((total, expense) => total + expense.amount, 0)
    .toFixed(2);
  return (
    <View style={styles.container}>
      <ExpensesHeader total={total} />
      <ExpensesList recent={recent} expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary800,
  },
});
