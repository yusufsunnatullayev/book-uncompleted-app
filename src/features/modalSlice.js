import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  modalType: "",
  currentUserId: "",
  currentBookId: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.modal = action.payload;
    },
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
    setCurrentUserId: (state, action) => {
      state.currentUserId = action.payload;
    },
    setCurrentBookId: (state, action) => {
      state.currentBookId = action.payload;
    },
  },
});

export const { setModal, setCurrentUserId, setModalType, setCurrentBookId } =
  modalSlice.actions;
export default modalSlice.reducer;
