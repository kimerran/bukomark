import React        from "react";
import ReactDOM     from "react-dom";

import feathers from 'feathers-client';
import io from 'socket.io-client';
import MainApp      from "./containers/main.container";


const socket = io();
const logger = createLogger();

const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  .configure(feathers.authentication({
    storage: window.localStorage
  }));

app.authenticate()
  .then(() => {
    ReactDOM.render(
        <MainApp app={app} />,
        document.getElementById("root")
    );
  })
  .catch((err) => {
    // redirect to home page
    console.log(err);
    window.location = '/';
  })

