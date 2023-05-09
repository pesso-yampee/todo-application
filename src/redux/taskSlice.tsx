import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface taskState {
  list: { id: string; category: string; name: string }[];
  modalIsOpen: boolean;
  deleteItemId: string;
  deleteItemIndex: number;
}

const initialState: taskState = {
  list: [],
  modalIsOpen: false,
  deleteItemId: "",
  deleteItemIndex: 0,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addToList: (
      state,
      action: PayloadAction<{ text: string; category: string }>
    ) => {
      state.list.push({
        id: `${action.payload.category}${state.list.length}`,
        category: `${action.payload.category}`,
        name: `${action.payload.text}`,
      });
    },
    setDeleteItemId: (state, action: PayloadAction<string>) => {
      state.deleteItemId = action.payload;
    },
    deleteItem: (state) => {
      // 削除対象要素のインデックスを取得する
      state.list.some((item, index) => {
        if (item.id === state.deleteItemId) {
          state.deleteItemIndex = index;
          return true;
        }
      });

      // 取得したインデックスを元に配列から削除対象要素を削除する
      state.list.splice(state.deleteItemIndex, 1);
    },
    moveTask: (
      state,
      action: PayloadAction<{
        id: string;
        dropZoneCategory: string;
      }>
    ) => {
      const id: string = action.payload.id;

      state.list.some((item) => {
        if (item.id === id) {
          item.category = action.payload.dropZoneCategory;
          return true;
        }
      });
    },
  },
});

export const {
  addToList,
  deleteItem,
  setDeleteItemId,
  moveTask,
} = taskSlice.actions;
