const todoReducer = (state = { todo: [] }, action) => {
  // console.log("Reducer is called");
  if (action.type === "todo") {
    return {
      todo: action.payload,
    };
  }
  return state;
};

export default todoReducer;
