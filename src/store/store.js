import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "../reducers/counterReducers";

const store = configureStore({
  reducer: {
    counter: counterReducers
  }
});

export default store;
