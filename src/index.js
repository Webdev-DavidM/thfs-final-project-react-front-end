import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "./Context.js";
import withContext from "./Context";

let AppWithContext = withContext(App);

// Below I am wrapping the app component with a higher order component of ContextProvider. ContextProvider handles all the user authentication for the app and will mean every component has access to the authenticated used should they need it via context

ReactDOM.render(
  <Provider>
    <AppWithContext />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
