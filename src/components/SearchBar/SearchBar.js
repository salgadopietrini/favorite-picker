import React, { useContext } from "react";
import { Context } from "../../App";
import TextField from "@mui/material/TextField";

export default function SearchBar() {
  const { search, setSearch } = useContext(Context);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <TextField
      id="outlined-basic"
      label="Search your book!"
      variant="outlined"
      onChange={handleSearch}
      value={search}
    />
  );
}
