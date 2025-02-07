import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [''],
  reducers: {
    add: (state, action) => {
      state.push(action.payload.inputValue)
    },
  },
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  }
})

export const { add } = todoSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//Fatias de estado