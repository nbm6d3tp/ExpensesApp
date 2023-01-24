import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectExpenses} from '../redux/expensesSlice';
import ExpenseItem from './ExpenseItem';

const ExpensesList = () => {
  const expenses = useSelector(selectExpenses);

  return (
    <FlatList
      data={expenses}
      keyExtractor={expense => expense.id}
      renderItem={expenseData => (
        <ExpenseItem
          description={expenseData.item.description}
          amount={expenseData.item.amount}
          date={expenseData.item.date}
        />
      )}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
