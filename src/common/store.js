import React from "react";
import { createStore, combineReducers } from "redux";
import timelineReducer from "../timeline/state";
import friendReducer from "../friend/state";

const reducer = combineReducers({
  timeLine: timelineReducer,
  friend: friendReducer,
});

function store(props) {
  return createStore(reducer);
}

export default store;
