import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { add } from '../../store';
export const FormComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleNewTodo = () => {
    dispatch(add({
      inputValue
    }))
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Novo To-do..."
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity style={styles.button} onPress={handleNewTodo}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "80%"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

