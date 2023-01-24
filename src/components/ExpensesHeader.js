import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

const ExpensesHeader = ({title, total}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total</Text>
      <Text style={styles.total}>Somme</Text>
    </View>
  );
};

export default ExpensesHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
    backgroundColor: colors.primary50,
    alignItems: 'center',

    padding: 10,
  },
  title: {
    color: colors.primary400,
  },
  total: {
    color: colors.primary400,
    fontWeight: 'bold',
  },
});
