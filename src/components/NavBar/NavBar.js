import React from "react";
import { Link } from "react-router-dom";
import "./StyleNav.scss";

export default function NavBar(props) {
  return (
    <div className="NavContainer">
      <Link className="NavText1" to={"/"}>Home</Link>
      <Link
        className="NavText2"
        to={{
          pathname: "/favorites",
          state: props.favorites,
        }}
      >
        Favorite Books
      </Link>
    </div>
  );
}
