import React        from "react";
import ReactDOM     from "react-dom";
import {Provider}   from "react-redux";
import thunk        from "redux-thunk";
import promise      from "redux-promise";
import createLogger from "redux-logger";
import allReducers  from "./reducers.index";
import MainApp      from "./containers/main.container";
import {
    createStore,
    applyMiddleware
} from "redux";

const feathers = require('feathers-client');
const io = require('socket.io-client');
const socket = io();
const logger = createLogger();

const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  .configure(feathers.authentication({
    storage: window.localStorage
  }));

app.authenticate()
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <MainApp app={app} />
        </Provider>,
        document.getElementById("root")
    );
  })
  .catch((err) => {
    // redirect to home page
    console.log(err);
    window.location = '/';
  })

