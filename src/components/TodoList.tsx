import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useAppSelector } from '../../store/index';
import { TodoComponent } from './TodoComponent';

export const TodoList = () => {
  const todos = useAppSelector(store => {
    return store.todo;
  })
  return (
    <View style={styles.container}>
      {todos.map((todo, index) => <TodoComponent TodoText={todo} key={index} Index={index} />)}
    </View>
  );
};
//pegar index da lista e usar pop no store para remover
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 16,
  },
  item: {
    fontSize: 22,
    marginBottom: 8,
    color: '#666',
  },
});

