import React, { useState, useEffect } from "react";
import BooksContainer from "./components/BooksContainer/BooksContainer";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import FavoriteContainer from "./components/FavoriteContainer/FavoriteContainer";
import axios from "axios";

export const Context = React.createContext();

export default function App() {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/c0443335-8da4-40fd-b38d-0e5bb72227bf")
      .then((response) => {
        setLibrary((books) => response.data);
      });
  }, []);

  return (
    <div>
      <Context.Provider value={library}>
        <BrowserRouter>
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
