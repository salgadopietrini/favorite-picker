import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Styles.scss";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Context } from "../../App";

export default function FavoriteContainer(props) {
  const { favorites } = useContext(Context);

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <h1 className="favoriteTitle">My Favorite Books</h1>
        <Container maxWidth="md">
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {favorites.map((elem) => (
              <Grid
                item
                xs={2}
                sm={2}
                md={4}
                key={Math.floor(Math.random() * 10000)}
              >
                <a
                  href={elem.infoLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{ display: "flex", maxWidth: 280, marginBottom: 3 }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          {elem.title}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          {elem.authors ? elem.authors[0] : null}
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={elem.imageLinks.thumbnail}
                      alt="Books cover"
                    />
                  </Card>
                </a>
              </Grid>
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
}
