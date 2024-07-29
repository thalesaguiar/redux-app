import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as ReduxProvider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { FormComponent } from './src/components/AddTodo';
import { TodoList } from './src/components/TodoList';
import { store } from './store';

export default function App() {
  return (
    <ReduxProvider store={store} >
      <View style={styles.container}>
        <FormComponent />
        <TodoList />
      </View>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
