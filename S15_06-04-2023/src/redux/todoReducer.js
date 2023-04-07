const todoReducer = (state = { todo: [] }, action) => {
  if (action.type === "todo") {
    return {
      todo: action.payload,
    };
  }
  return state;
};

export default todoReducer;
