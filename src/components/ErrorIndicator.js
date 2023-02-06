import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

const ErrorIndicator = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>An error is occured!!!</Text>
    </View>
  );
};

export default ErrorIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary800,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },
});
