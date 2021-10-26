import React, { useContext } from "react";
import Book from "../Book/Book";
import FavoriteBooks from "../FavoriteBooks/FavoriteBooks";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Context } from "../../App";
import SearchBar from "../SearchBar/SearchBar";

export default function BooksContainer() {
  const { library, favorites, setFavorites } = useContext(Context);

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
        <CssBaseline />
        <Container maxWidth="md">
          <SearchBar />
          {favorites.length > 0 && (
            <FavoriteBooks list={favorites} handleDelete={handleDelete} />
          )}
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {library.length > 0
              ? library
                  .filter((elem) => elem.volumeInfo.imageLinks)
                  .map((elem) => (
                    <Grid
                      item
                      xs={2}
                      sm={2}
                      md={3}
                      key={Math.floor(Math.random() * 10000)}
                    >
                      <Book
                        info={{ ...elem.volumeInfo, id: elem.id }}
                        handleSelect={handleSelect}
                      />
                    </Grid>
                  ))
              : null}
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
}
