import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"
import sidebarReducer from "./changeSidebarSlice"
import darkModeReducer from "./changeModeSlice"



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sidebar: sidebarReducer,
    darkMode: darkModeReducer
  },
});