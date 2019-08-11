import React from "react";
import ReactDOM from "react-dom";
import { Router, RouteComponentProps } from "@reach/router";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./Store";
import HomePage from "./HomePage";
import FavsPage from "./FavsPage";


const RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps) => props.pageComponent
ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'> 
        <RouterPage pageComponent={<HomePage />} path='/'></RouterPage>
        <RouterPage pageComponent={<FavsPage />} path='/favs'></RouterPage>
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
