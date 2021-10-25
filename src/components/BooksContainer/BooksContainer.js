import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "../Book/Book";
import FavoriteBooks from "../FavoriteBooks/FavoriteBooks";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import NavBar from "../NavBar/NavBar";
import Grid from "@mui/material/Grid";

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
    if (favorites.some((elem) => elem.id === book.id)) {
    } else {
      setFavorites((prevValue) => [...prevValue, book]);
    }
  };

  const handleDelete = (id) => {
    const indexToDelete = favorites.findIndex((elem) => elem.id === id);
    setFavorites(
      favorites
        .slice(0, indexToDelete)
        .concat(favorites.slice(indexToDelete + 1, favorites.length))
    );
  };

  return (
    <div>
      <React.Fragment>
        <NavBar favorites={favorites} />
        <CssBaseline />
        <Container maxWidth="md">
          {favorites.length > 0 && (
            <FavoriteBooks list={favorites} handleDelete={handleDelete} />
          )}
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {books.length > 0 ? (
              books.map((elem) => (
                <Grid
                  item
                  xs={2}
                  sm={2}
                  md={3}
                  key={Math.floor(Math.random() * 10000)}
                >
                  <Book info={elem} handleSelect={handleSelect} />
                </Grid>
              ))
            ) : (
              <h1>Loading books...</h1>
            )}
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
}
