import {StyleSheet, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {colors} from '../constants/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import IconButton from '../components/IconButton';
import {addExpense, modifyExpense, deleteExpense} from '../redux/expensesSlice';
import {useDispatch} from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';

const ManageExpense = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.id;
  const isAddMode = id ? false : true;
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteExpense(id));
    cancelHandler();
  };
  const addHandler = expense => {
    dispatch(addExpense(expense));
    cancelHandler();
  };
  const updateHandler = expense => {
    dispatch(modifyExpense(expense));
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
