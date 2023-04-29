import { configureStore } from '@reduxjs/toolkit';
import { addTaskSlice } from './addTaskSlice';

export const store = configureStore({
	reducer: {
		addTask: addTaskSlice.reducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
