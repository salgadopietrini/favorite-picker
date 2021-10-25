import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "../Book/Book";

export default function BooksContainer() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setBooks((books) => response.data);
    });
  }, []);

  return (
    <div>
      {books.length > 0 ? (
        books.map((elem) => (
          <Book info={elem} key={Math.floor(Math.random() * 10000)} />
        ))
      ) : (
        <h1>Loading books...</h1>
      )}
    </div>
  );
}
