import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

const ExpenseItem = ({id, description, amount, date}) => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{
          color: 'white',
        }}
        style={styles.pressable}>
        <View style={styles.leftContainer}>
          <Text style={styles.descriptionText}>{description}</Text>
          <Text style={styles.dateText}>{`${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`}</Text>
        </View>
        <View style={styles.amountTextContainer}>
          <Text style={styles.amountText}>{amount}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 5,
    width: '90%',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  pressable: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.primary500,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {},
  descriptionText: {color: 'white', fontWeight: 'bold'},
  dateText: {color: 'white'},
  amountTextContainer: {},
  amountText: {color: 'white'},
});
