const { createSlice } = require("@reduxjs/toolkit");

const initialBooks = {
  books: JSON.parse(localStorage.getItem("initBooks")) || [
    { id: 1, title: "Cokher bali", author: "Pujon Das Auvi" },
    { id: 2, title: "Bela Sheshe", author: "Pujon Das Auvi" },
    { id: 3, title: "Grihodaho", author: "Pujon Das Auvi" },
  ],
};

export const BooksSlice = createSlice({
  name: "Books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
      localStorage.setItem("initBooks", JSON.stringify(state.books));
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const existBook = state.books.filter((book) => book.id === id);
      const bookId = existBook[0].id;

      for (let i = 0; i < state.books.length; i++) {
        if (state.books[i].id === bookId) {
          state.books[i].title = title;
          state.books[i].author = author;
        }
      }

      localStorage.setItem("initBooks", JSON.stringify(state.books));
    },
    deleteBook: (state, action) => {
      const id = action.payload;

      state.books = state.books.filter((book) => book.id !== id);
      localStorage.setItem("initBooks", JSON.stringify(state.books));
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  BooksSlice.actions;
export default BooksSlice.reducer;
