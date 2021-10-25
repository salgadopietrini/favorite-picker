import React from "react";
import FavoriteBookPreview from "../FavoriteBookPreview/FavoriteBookPreview";

export default function FavoriteBooks(props) {
  return (
    <div>
      {props.list.map((elem) => (
        <FavoriteBookPreview info={elem} />
      ))}
    </div>
  );
}
