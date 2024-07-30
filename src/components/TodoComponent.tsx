import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { remove } from "../../store";
import { useDispatch } from "react-redux";

type Props = {
  TodoText: string;
  Index: number;
}

export function TodoComponent({ TodoText, Index }: Props) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(remove({ Index }));
  };

  return (
    <View style={styles.container} >
      <Text style={styles.item}>{TodoText}</Text>
      <TouchableOpacity onPress={() => handleRemove()}>
        <Text style={{ color: 'red', fontSize: 18, fontWeight: "bold" }}>X</Text>
      </TouchableOpacity>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 40,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 20
  },
  item: {
    fontSize: 22,
    marginBottom: 8,
    color: '#666',
  },
});

function dispatch(arg0: { payload: any; type: "todo/remove"; }) {
  throw new Error("Function not implemented.");
}
