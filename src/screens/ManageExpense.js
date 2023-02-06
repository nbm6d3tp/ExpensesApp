import {StyleSheet, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {colors} from '../constants/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import IconButton from '../components/IconButton';
import {addExpense, modifyExpense, deleteExpense} from '../redux/expensesSlice';
import {useDispatch} from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import {
  addExpenseDatabase,
  deleteExpensesDatabase,
  editExpensesDatabase,
} from '../util/http';
import LoadingIndicator from '../components/LoadingIndicator';

const ManageExpense = () => {
  const [isLoading, setIsLoading] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.id;
  const isAddMode = id ? false : true;
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteExpense(id));
    deleteExpensesDatabase(id);
    cancelHandler();
  };
  const addHandler = expense => {
    async function addHandlerDatabase() {
      setIsLoading(true);
      dispatch(addExpense({id: await addExpenseDatabase(expense), ...expense}));
      setIsLoading(false);
    }
    addHandlerDatabase();
    cancelHandler();
  };
  const updateHandler = expense => {
    dispatch(modifyExpense({id: id, ...expense}));
    setIsLoading(true);
    editExpensesDatabase(id, expense);
    setIsLoading(false);
    cancelHandler();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    NavigationBar.setBackgroundColorAsync(colors.primary800);
    navigation.setOptions({
      title: isAddMode ? 'Add Expense' : 'Edit Expense',
    });
    return () => {
      NavigationBar.setBackgroundColorAsync(colors.primary500);
    };
  }, [navigation, isAddMode]);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        id={id}
        titleSubmitButton={isAddMode ? 'Add' : 'Modify'}
        onSubmit={isAddMode ? addHandler : updateHandler}
        onCancel={cancelHandler}
      />
      {!isAddMode ? (
        <IconButton
          name="trash"
          color={colors.error500}
          size={36}
          onPress={deleteHandler}
        />
      ) : null}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary800,
    alignItems: 'center',
  },
});
