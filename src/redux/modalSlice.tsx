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
    },
  },
});

export const { toggleShowModal } = modalSlice.actions;
