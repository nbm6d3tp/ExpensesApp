import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

const ExpenseItem = ({id, description, amount, date}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate('ManageExpense', {id: id});
        }}
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
          <Text style={styles.amountText}>${amount.toFixed(2)}</Text>
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
    paddingLeft: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  dateText: {
    color: 'white',
    fontSize: 12,
  },
  amountTextContainer: {
    backgroundColor: 'white',
    minWidth: 60,
    paddingVertical: 8,
    borderRadius: 5,
  },
  amountText: {
    color: colors.primary400,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
});
