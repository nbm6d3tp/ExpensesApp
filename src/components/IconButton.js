import {StyleSheet, Pressable, View} from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';

const IconButton = ({name, size, color, onPress, style}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [style, pressed ? {opacity: 0.5} : null]}>
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
