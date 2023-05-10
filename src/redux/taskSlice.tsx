import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface taskState {
  text: string;
  list: { id: string; category: string; name: string }[];
  deleteItemId: string;
  deleteItemIndex: number;
}

const initialState: taskState = {
  text: "",
  list: [],
  deleteItemId: "",
  deleteItemIndex: 0,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    addToList: (
      state,
      action: PayloadAction<{ text: string; category: string }>
    ) => {
      state.list.push({
        id: uuidv4(),
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
    moveItem: (
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

export const { setText, addToList, deleteItem, setDeleteItemId, moveItem } =
  taskSlice.actions;
