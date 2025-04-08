import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps, ViewStyle } from 'react-native';

interface CustomInputProps extends TextInputProps {
  label: string;
  containerStyle?: ViewStyle; 
}

const CustomInput: React.FC<CustomInputProps> = ({ label, containerStyle, ...textInputProps }) => {
  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={StyleSheet.flatten([styles.input])} 
        placeholderTextColor="#aaa"
        {...textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: 'white',
    marginBottom: 6,
    fontSize: 16,
  },
  input: {
    height: 44,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    color: 'white',
    backgroundColor: '#333',
  },
});

export default CustomInput;