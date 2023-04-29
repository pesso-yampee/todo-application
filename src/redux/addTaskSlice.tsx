import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface taskState {
	text: string;
	list: {
		id: number;
		category: string;
		name: string;
	}[];
}

const initialState: taskState = {
	text: '',
	list: []
};

export const addTaskSlice = createSlice({
	name: 'addTask',
	initialState,
	reducers: {
		addText: (state, action: PayloadAction<String>) => {
			state.text = `${action.payload}`;
		},
		removeText: (state) => {
			state.text = '';
		},
		addList: (state, action: PayloadAction<String>) => {
			state.list.push({
				id: state.list.length,
				category: `${action.payload}`,
				name: state.text
			});
		},
		removeTask: (state) => {}
	}
});

export const { addText, removeText, addList } = addTaskSlice.actions;
