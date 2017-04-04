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

const logger = createLogger();

const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <MainApp />
    </Provider>,
    document.getElementById("root")
);