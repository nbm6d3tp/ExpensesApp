import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({expenses}) => {
  return (
    <View style={{paddingBottom: 15}}>
      <FlatList
        data={expenses}
        keyExtractor={expense => expense.id}
        renderItem={expenseData => (
          <ExpenseItem
            id={expenseData.item.id}
            description={expenseData.item.description}
            amount={expenseData.item.amount}
            date={new Date(expenseData.item.date)}
          />
        )}
      />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
