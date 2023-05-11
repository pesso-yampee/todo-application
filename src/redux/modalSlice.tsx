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
      const html: Element | null = document.querySelector("html");
      // iOSの場合はモーダル表示中の背景コンテンツをスクロールさせないためにhtmlタグにもスタイルを適用する
      if (navigator.userAgent.match(/iPhone/)) {
        if (state.modalIsOpen) {
          html?.setAttribute("data-modal-open", "true");
        } else {
          html?.removeAttribute("data-modal-open");
        }
      }
    },
  },
});

export const { toggleShowModal } = modalSlice.actions;
