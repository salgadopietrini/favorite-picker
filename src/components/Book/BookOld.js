import React from "react";

export default function Book(props) {
  const selectBook = () => {
    props.handleSelect(props.info);
  };

  return (
    <div>
      <div>{props.info.title}</div>
      <div>{props.info.author}</div>
      <div>{props.info.data}</div>
      <div>
        <img alt="Book Cover" src={props.info.image} width="100px"></img>
      </div>
      <button onClick={selectBook}>Favorite!</button>
    </div>
  );
}


