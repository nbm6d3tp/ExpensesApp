import {StyleSheet, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {colors} from '../constants/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../components/Button';
import * as NavigationBar from 'expo-navigation-bar';
import IconButton from '../components/IconButton';
import {addExpense, modifyExpense, deleteExpense} from '../redux/expensesSlice';
import {useDispatch} from 'react-redux';

const ManageExpense = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const isAddMode = route.params.action === 'add';
  const id = route.params.id;
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteExpense(id));
    cancelHandler();
  };
  const addHandler = () => {
    dispatch(
      addExpense({
        id: Math.random(),
        description: 'Test Add',
        amount: 89.29,
        date: new Date('2023-01-24'),
      }),
    );
    cancelHandler();
  };
  const updateHandler = () => {
    dispatch(
      modifyExpense({
        id: Math.random(),
        description: 'Test Modify',
        amount: 22.29,
        date: new Date('2023-01-01'),
      }),
    );
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
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.cancelButton}
          title="Cancel"
          color={colors.primary50}
          onPress={cancelHandler}
        />
        <Button
          style={styles.rightButton}
          title={isAddMode ? 'Add' : 'Update'}
          color={colors.primary800}
          onPress={isAddMode ? addHandler : updateHandler}
        />
      </View>
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
  buttonsContainer: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    padding: 20,
    top: 10,
    borderBottomColor: colors.primary50,
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  cancelButton: {
    backgroundColor: colors.primary800,
  },
  rightButton: {backgroundColor: colors.primary50},
});
