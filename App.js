import React from "react";
import Search from "./components/search";
import Add from "./components/add/";
import Board from "./components/board";
import reducer from "./reducer/";
import { Container } from "./style";
import { Provider } from "react-redux";
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
