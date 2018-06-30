import React from "react";
import { Container } from "./style";
import Search from "./components/search";
import Add from "./components/add/";
import Board from "./components/board";
import { Provider } from "react-redux";
import reducer from "./components/reducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default () => {
  return (
    <Provider store={store}>
      <Container>
        <Search />
        <Board />
        <Add />
      </Container>
    </Provider>
  );
};
