import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  mode:false
}

export const changeModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    changeMode:(state) => {
      state.mode = !state.mode;
    }
  },
});

export const {changeMode} = changeModeSlice.actions;
export default changeModeSlice.reducer;