import CreateItemsLogic from "../common/createItemsLogic";
import createReducer from "../common/createReducer";
import MergeReducer from "../common/mergeReducer";
const {
  add,
  remove,
  edit,
  reducer: timelineReducer,
} = CreateItemsLogic("timelines");

const INCREASE_NEXT_PAGE = "timelines/INCREASE_NEXT_PAGE";

export const addTimeline = add;
export const removeTimeline = remove;
export const editTimeline = edit;
export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

const INITIAL_STATE = { nextPage: 0 };
const reducer = createReducer(INITIAL_STATE, {
  [INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
});

const reducers = [reducer, timelineReducer];
export default MergeReducer(reducers);

// const ADD = "timeline/ADD";
// const REMOVE = "timeline/REMOVE"
// const EDIT = "timeline/EDIT"
// const INCREASE_NEXT_PAGE = 'timeline/INCREASE_NEXT_PAGE'

// const INITIAL_STATE = { timelines: [], nextPage: 0 };
//
// const timelineReducer = createReducer(INITIAL_STATE, {
//   [ADD]: (state, action) => state.timelines.push(action.timeline),
//   [REMOVE]: (state, action) =>
//     (state.timelines = state.timelines.filter(
//       (timeline) => timeline.id !== action.timeline.id
//     )),
//   [EDIT]: (state, action) => {
//     const index = state.timelines.findIndex(
//       (timeline) => timeline.id === action.timeline.id
//     );
//     if (index >= 0) {
//       state.timelines[index] = action.timeline;
//     }
//   },
//   [INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
// });
