import { createSlice } from "@reduxjs/toolkit";

interface modalState {
  modalIsOpen: boolean;
}

const initialState: modalState = {
  modalIsOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleShowModal: (state) => {
      state.modalIsOpen = !state.modalIsOpen;

      // iOSの場合はモーダル表示中の背景コンテンツをスクロールさせないためにhtmlタグにもスタイルを適用する
      if (navigator.userAgent.match(/iPhone/)) {
        document.querySelector("html")?.classList.toggle("is-hidden");
      }
    },
  },
});

export const { toggleShowModal } = modalSlice.actions;
