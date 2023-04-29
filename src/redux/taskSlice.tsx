import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface taskState {
  text: string;
  list: { id: string; category: string; name: string }[];
  modalIsOpen: boolean;
  deleteTargetId: string;
  deleteTargetIndex: number;
}

const initialState: taskState = {
  text: "",
  list: [],
  modalIsOpen: false,
  deleteTargetId: "",
  deleteTargetIndex: 0,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addText: (state, action: PayloadAction<String>) => {
      state.text = `${action.payload}`;
    },
    initializeText: (state) => {
      state.text = "";
    },
    addList: (state, action: PayloadAction<String>) => {
      state.list.push({
        id: `${action.payload}-${state.list.length}`,
        category: `${action.payload}`,
        name: state.text,
      });
    },
    toggleModal: (state) => {
      state.modalIsOpen = !state.modalIsOpen;
    },
    setDeleteTargetId: (state, action: PayloadAction<string>) => {
      state.deleteTargetId = action.payload;
    },
    deleteTask: (state) => {
      // 削除対象要素のインデックスを取得する
      state.list.some((item, index) => {
        if (item.id === state.deleteTargetId) {
          state.deleteTargetIndex = index;
          return true;
        }
      });

      // 取得したインデックスを元に配列から削除対象要素を削除する
      state.list.splice(state.deleteTargetIndex, 1);
    },
  },
});

export const {
  addText,
  initializeText,
  addList,
  toggleModal,
  deleteTask,
  setDeleteTargetId,
} = taskSlice.actions;
