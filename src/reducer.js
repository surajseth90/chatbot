import { createStore } from "redux";

const initialState = {
  htmlData: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HTML_DATA":
      return {
        ...state,
        htmlData: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
