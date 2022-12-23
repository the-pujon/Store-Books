import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "../features/books/BookSlice";

const store = configureStore({
  reducer: {
    bookReducer: BookSlice,
  },
});

export default store;
