import React, { useState, useEffect } from "react";
import BooksContainer from "./components/BooksContainer/BooksContainer";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import FavoriteContainer from "./components/FavoriteContainer/FavoriteContainer";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar";

export const Context = React.createContext();

export default function App() {
  const [library, setLibrary] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40`
      )
      .then((response) => {
        setLibrary(response.data.items);
      });
  }, [search]);

  return (
    <div>
      <Context.Provider
        value={{
          library: library,
          favorites: favorites,
          setFavorites: setFavorites,
          search: search,
          setSearch: setSearch,
        }}
      >
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path={"/"} component={BooksContainer}></Route>
            <Route
              exact
              path={"/favorites"}
              component={FavoriteContainer}
            ></Route>
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
