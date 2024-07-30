import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useAppSelector } from '../../store/index';

export const TodoList = () => {
  const todos = useAppSelector(store => {
    return store.todo;
  })
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo</Text>
      {todos.map(todo => <Text style={styles.item} key={Math.random()}>{todo}</Text>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  item: {
    fontSize: 22,
    marginBottom: 8,
    color: '#666',
  },
});

