import counterReducer from "@/features/counter/slice/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

export default function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
