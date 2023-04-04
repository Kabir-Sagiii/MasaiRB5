import { useState } from "react";
import Child from "./Child";

function Parent(props) {
  const [state, setState] = useState("Child Data should be updated");

  var style = {
    width: "500px",
    padding: "50px",
    textAlign: "center",
    margin: "50px auto 20px",
    boxShadow: "0 0 10px black",
  };

  const wrapper = (data) => {
    setState(data);
  };
  return (
    <div style={style}>
      <h2>Parent Component</h2>
      <p style={{ color: "red" }}> {state} </p>
      <Child action={wrapper} />
    </div>
  );
}

export default Parent;
