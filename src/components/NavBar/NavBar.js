import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <Link to={"/"}>HomePage</Link>
      <Link
        to={{
          pathname: "/favorites",
          state: props.favorites,
        }}
      >
        Favorites
      </Link>
    </div>
  );
}
