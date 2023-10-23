import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showLabelDialog: false
};

export const slice = createSlice({
  name: 'labels',
  initialState,
  reducers: {
    toggleLabelDialog(state, action) {
      state.showLabelDialog = action.payload;
    }
  }
});

export const { toggleLabelDialog } = slice.actions;

export default slice.reducer;
