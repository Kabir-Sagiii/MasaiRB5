import "./App.css";
import { useState } from "react";
import Post from "./Components/Lifecyle/Post";
import Timer from "./Components/Timer/Timer";
import Form from "./Components/Forms/Form";

function App() {
  return (
    <div className="App">
      <Form />
      <hr />
      <Timer />
      <hr />

      <Post />
    </div>
  );
}

export default App;
