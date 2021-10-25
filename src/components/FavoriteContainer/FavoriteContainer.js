import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Styles.scss";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function FavoriteContainer(props) {
  const [favorites, setFavorites] = useState(props.location.state);

  return (
    <div>
      <React.Fragment>
        <div className="NavContainer">
          <Link className="NavText1" to={"/"}>
            Home
          </Link>
          <Link
            className="NavText2"
            to={{
              pathname: "/favorites",
            }}
          >
            Favorite Books
          </Link>
        </div>

        <CssBaseline />
        <Container>
          {favorites.map((elem) => (
            <div>
              <div>{elem.title}</div>
              <div>{elem.author}</div>
              <div>{elem.data}</div>
              <div>
                <img alt="Book Cover" src={elem.image} width="100px"></img>
              </div>
            </div>
          ))}
        </Container>
      </React.Fragment>
    </div>
  );
}
