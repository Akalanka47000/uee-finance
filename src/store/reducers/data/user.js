import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: null
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.current = action.payload;
    }
  }
});

export const { setCurrentUser } = slice.actions;

export default slice.reducer;
