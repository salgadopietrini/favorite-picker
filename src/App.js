import React from "react";
import BooksContainer from "./components/BooksContainer/BooksContainer";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import FavoriteContainer from "./components/FavoriteContainer/FavoriteContainer";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <div>
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
    </div>
  );
}
