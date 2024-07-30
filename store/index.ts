import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';



const todoSlice = createSlice({
  name: 'todo',
  initialState: [] as string[],
  reducers: {
    add: (state, action) => {
      state.push(action.payload.inputValue)
    },
    remove: (state, action) => {
      const index = action.payload.Index;
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  },
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  }
})

export const { add, remove } = todoSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
