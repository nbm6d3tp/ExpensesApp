import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomButton = ({style, title, onPress, color}) => {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: 'white'}}
        style={({pressed}) => [
          styles.pressable,
          pressed ? {opacity: 0.5} : null,
        ]}>
        <Text style={{...styles.title, color: color}}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: 'hidden',
    flex: 1,
    marginHorizontal: 10,
  },
  pressable: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {},
});
