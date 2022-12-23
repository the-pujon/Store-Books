const { createSlice } = require("@reduxjs/toolkit");

//here I used localStorage getItem for get the item thats stored in localStorage already.
//But if there is no data in localStorage then it will take those data that i defined ...

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

      //after pushing new book into the state I set this array to localStorage by localStorage.setItem
      localStorage.setItem("initBooks", JSON.stringify(state.books));
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;

      //here First we need to filter the book that we want to edit or update whatever you say.
      const existBook = state.books.filter((book) => book.id === id);
      //then store the book id in bookId
      const bookId = existBook[0].id;

      //here we run a for loop to find is bookId match with our state or not..
      //if it match with state then set new title and author to our state
      //and after that we again store our state in localStorage

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

      //after filtering book we again store our state in localStorage
      localStorage.setItem("initBooks", JSON.stringify(state.books));
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  BooksSlice.actions;
export default BooksSlice.reducer;
