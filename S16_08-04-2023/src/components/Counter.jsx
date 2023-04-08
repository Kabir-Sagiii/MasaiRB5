import React from "react";
import myStore from "../redux/Store";
import { useSelector, useDispatch } from "react-redux";
import { incActionCreator } from "../redux/ActionCreators";

function Counter(props) {
  const dispatch = useDispatch();
  const data = useSelector((storedata) => {
    return storedata;
  });

  const increaseCount = () => {
    // myStore.dispatch({
    //   type: "inc",
    //   countValue: 2,
    // });

    // dispatch({
    //   type: "inc",
    //   countValue: 2,
    // });

    dispatch(incActionCreator(2));
  };

  const decreaseCount = () => {
    myStore.dispatch({
      type: "dec",
      countValue: 1,
    });
  };
  return (
    <div style={{ margin: "100px" }}>
      <h2>Count Value : {data.count}</h2>
      <button onClick={increaseCount}>Increase Count by 2</button>{" "}
      &nbsp;&nbsp;&nbsp;
      <button onClick={decreaseCount}>Decrease Count by 1</button>
    </div>
  );
}

export default Counter;
