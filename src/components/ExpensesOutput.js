import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ExpensesHeader from './ExpensesHeader';
import ExpensesList from './ExpensesList';
import {useSelector, useDispatch} from 'react-redux';
import {selectExpenses, setExpenses} from '../redux/expensesSlice';
import {colors} from '../constants/colors';
import {fetchExpenses} from '../util/http';
import LoadingIndicator from './LoadingIndicator';
import ErrorIndicator from './ErrorIndicator';
const ExpensesOutput = ({recent}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(setExpenses(await fetchExpenses()));
      } catch (error) {
        setIsError(true);
      }
    }
    fetchData();
    setIsLoading(false);
  }, []);

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
  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (isError && !isLoading) {
    return <ErrorIndicator />;
  }
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
