import { createStore } from "redux";

const initialState = {
  htmlData: [],
  prevData: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HTML_DATA":
      return {
        ...state,
        htmlData: action.payload,
      };
    case "SET_PREV_DATA":
      return {
        ...state,
        prevData: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
