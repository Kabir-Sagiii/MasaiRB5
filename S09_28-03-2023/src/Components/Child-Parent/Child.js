import { useState } from "react";

function Child({ action }) {
  const [childdata, setChildData] = useState();
  var style = {
    boxShadow: "0 0 10px red",
    textAlign: "center",
    padding: "20px",
    marginTop: "50px",
  };
  const sendDataToParent = () => {
    action(childdata);
  };
  return (
    <div style={style}>
      <h2>Child Comppnent</h2>
      <input
        type="text"
        placeholder="Enter Some Text"
        onChange={(e) => {
          setChildData(e.target.value);
        }}
      />
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
}

export default Child;
