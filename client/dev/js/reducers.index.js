import {combineReducers}    from "redux";

import MainReducer          from "./reducers/main.reducer";

const allReducers = combineReducers({
    mainReducer: MainReducer
});

export default allReducers;