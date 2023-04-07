import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { todoActionCreator } from "../redux/ActionCreators";

function TodoInput(props) {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const sendDataToServer = () => {
    var data = {
      name: user,
      status: true,
    };
    axios.post("http://localhost:3000/users", data).then((res) => {
      setUser("");
      axios.get("http://localhost:3000/users").then((res) => {
        dispatch(todoActionCreator(res.data));
      });
    });
  };
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
      <button onClick={sendDataToServer}>Submit</button>
    </div>
  );
}

export default TodoInput;
