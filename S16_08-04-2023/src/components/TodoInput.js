import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { todoActionCreator } from "../redux/ActionCreators";
import thunkActionCreator from "../redux/thunk";

function TodoInput(props) {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todo Input</h2>
      <input
        type="text"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(thunkActionCreator("post", null, user, setUser));
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default TodoInput;
