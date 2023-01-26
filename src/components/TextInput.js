import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

const TextInputCustom = ({isValid, style, title, configInput}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, !isValid ? {color: colors.error500} : null]}>
        {title}
      </Text>
      <TextInput
        cursorColor={colors.primary800}
        {...configInput}
        style={[
          styles.textInput,
          !isValid ? {backgroundColor: colors.error50} : null,
        ]}
      />
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  container: {},
  text: {
    color: 'white',
    fontSize: 13,
  },
  textInput: {
    marginTop: 2,
    backgroundColor: colors.primary50,
    borderRadius: 8,
    paddingHorizontal: 5,
    height: 30,
  },
});
