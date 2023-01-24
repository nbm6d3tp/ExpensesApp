import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExpensesHeader from './ExpensesHeader';
import ExpensesList from './ExpensesList';

const ExpensesOutput = () => {
  return (
    <View style={styles.container}>
      <ExpensesHeader />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
