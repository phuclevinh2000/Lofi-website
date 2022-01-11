import {
  LIST_ADD,
  LIST_REMOVE,
  LIST_ADD_DONE,
  LIST_REMOVE_DONE,
} from '../constantsType/actionType';

export const listReducer = (
  state = { todoList: [], repeat: false },
  action
) => {
  switch (action.type) {
    case LIST_ADD:
      const newList = action.payload;
      const checkName = state.todoList.find(
        (x) => x.name === action.payload.name
      );
      // console.log(checkName)
      if (!checkName) {
        return {
          ...state,
          repeat: false,
          todoList: [...state.todoList, newList],
        };
      } else {
        return {
          ...state,
          repeat: true,
        };
      }

    case LIST_REMOVE:
      return {
        ...state,
        todoList: state.todoList.filter((x) => x.name !== action.payload), //remove that one from the list
      };

    case LIST_ADD_DONE:
      const existNote = state.todoList.find(
        (x) => x.name === action.payload.name
      );
      return {
        ...state,
        todoList: state.todoList.map((x) =>
          x.name === existNote.name ? action.payload : x
        ), //replace that todoList.complete to true
      };

    case LIST_REMOVE_DONE:
      const uncompleteNote = state.todoList.find(
        (x) => x.name === action.payload.name
      );
      return {
        ...state,
        todoList: state.todoList.map((x) =>
          x.name === uncompleteNote.name ? action.payload : x
        ), //replace that todoList.complete to true
      };
    default:
      return state;
  }
};
