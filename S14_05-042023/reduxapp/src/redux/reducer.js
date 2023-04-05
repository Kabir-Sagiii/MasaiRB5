var initialState = {
  users: {},
  product: {},
  count: 0,
  todo: [],
};
const myReducer = (storedata = initialState, action) => {
  if (action.type === "inc") {
    return {
      ...storedata,
      count: storedata.count + action.countValue,
    };
  } else if (action.type === "dec") {
    return {
      ...storedata,
      count: storedata.count - action.countValue,
    };
  }
  return storedata;
};

export default myReducer;
