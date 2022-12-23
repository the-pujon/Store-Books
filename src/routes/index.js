import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import AddBooks from "../features/books/AddBooks";
import Error from "../pages/Error";
import Home from "../pages/Home";
import ShowBooks from "../features/books/ShowBooks";
import Footer from "../layouts/Footer";
import EditBooks from "../features/books/EditBooks";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/show-books" element={<ShowBooks />} />
          <Route path="add-book" element={<AddBooks />} />
          <Route path="edit-books" element={<EditBooks />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Index;
