import React from "react";

function MergeReducer(reducers) {
  return function (state, action) {
    if (!state) {
      return reducers.reduce((acc, r) => ({ ...acc, ...r(state, action) }), {});
    } else {
      let nextState = state;
      for (const r of reducers) {
        nextState = r(nextState, action);
      }
      return nextState;
    }
  };
}

export default MergeReducer;
