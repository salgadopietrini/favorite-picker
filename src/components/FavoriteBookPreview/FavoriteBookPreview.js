import React from "react";

export default function FavoriteBookPreview(props) {
  return (
    <div>
      <img alt="Book Cover" src={props.info.image} width="100px"></img>
    </div>
  );
}
