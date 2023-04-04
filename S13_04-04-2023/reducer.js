const initialData = {
  count: 0,
};
const myReducer = (storeData = initialData, action) => {
  // Based on Action we have to update the current store data
  if (action.type === "inc") {
    return {
      ...storeData,
      count: storeData.count + action.data,
    };
  } else if (action.type === "dec") {
    return {
      ...storeData,
      count: storeData.count - action.data,
    };
  }

  return storeData;
};

export default myReducer;
