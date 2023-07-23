import { configureStore } from "@reduxjs/toolkit";
import { rootReducer, tasksReducer, filtersReducer } from "./reducer";

// const store = configureStore({
//   reducer: rootReducer,
// });

export const store = configureStore({
  reducer: {
  contacts: [],
  filter: ""
},
});
