import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary800,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
