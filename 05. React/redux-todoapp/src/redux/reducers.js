import { ADD_TODO } from "./actionTypes";

const initialState = {
  todos: [],
  filter: "ALL",
  serachTerm: "",
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    default:
      break;
  }
};
export default todoReducer;
