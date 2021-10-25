import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "../Book/Book";
import FavoriteBooks from "../FavoriteBooks/FavoriteBooks";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import NavBar from "../NavBar/NavBar";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {books.length > 0 ? (
              books.map((elem) => (
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
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
