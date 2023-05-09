import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./taskSlice";
import { modalSlice } from "./modalSlice";

export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
