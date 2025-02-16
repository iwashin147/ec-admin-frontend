import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  value: number;
}

// stateの初期値
const initialState: CounterState = {
  value: 0,
};

/**
 * counterのSlice定義
 */
export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  selectors: {
    selectCount: (counter) => counter.value,
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const { selectCount } = counterSlice.selectors;

export default counterSlice.reducer;
