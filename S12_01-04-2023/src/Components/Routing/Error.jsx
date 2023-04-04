import React from "react";

function Error(props) {
  return (
    <div style={{ textAlign: "center", color: "red" }}>
      <h2 style={{ fontSize: "50px" }}>
        Only Admin Can Access Profile Component
      </h2>
    </div>
  );
}

export default Error;
