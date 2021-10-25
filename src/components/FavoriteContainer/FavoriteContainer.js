import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FavoriteContainer(props) {
  const [favorites, setFavorites] = useState(props.location.state);

  return (
    <div>
      <div>
        <Link to={"/"}>HomePage</Link>
        <Link
          to={{
            pathname: "/favorites",
          }}
        >
          Favorites
        </Link>
      </div>
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
    </div>
  );
}
