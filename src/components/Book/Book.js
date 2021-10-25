import React from "react";

export default function Book(props) {
  return (
    <div>
      <div>{props.info.title}</div>
      <div>{props.info.author}</div>
      <div>{props.info.data}</div>
      <div>
        <img alt="PokemonImage" src={props.info.image} width="100px"></img>
      </div>
    </div>
  );
}
