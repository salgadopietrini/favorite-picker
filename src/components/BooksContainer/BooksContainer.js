import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "../Book/Book";
import FavoriteBooks from "../FavoriteBooks/FavoriteBooks";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import NavBar from "../NavBar/NavBar";

export default function BooksContainer() {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/c0443335-8da4-40fd-b38d-0e5bb72227bf")
      .then((response) => {
        setBooks((books) => response.data);
      });
  }, []);

  const handleSelect = (book) => {
    setFavorites((prevValue) => [...prevValue, book]);
  };

  return (
    <div>
      <React.Fragment>
        <NavBar favorites={favorites} />
        <CssBaseline />
        <Container maxWidth="lg">
          {favorites.length > 0 && <FavoriteBooks list={favorites} />}
          {books.length > 0 ? (
            books.map((elem) => (
              <Book
                info={elem}
                handleSelect={handleSelect}
                key={Math.floor(Math.random() * 10000)}
              />
            ))
          ) : (
            <h1>Loading books...</h1>
          )}
        </Container>
      </React.Fragment>
    </div>
  );
}


