import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  changeSidebar:false
}

export const changeSidebarSlice = createSlice({
  name:"sidebar",
  initialState,
  reducers:{
    changeSide:(state) => {
      state.changeSidebar = !state.changeSidebar;
    }
  }
})

export const {changeSide} = changeSidebarSlice.actions;
export default changeSidebarSlice.reducer;