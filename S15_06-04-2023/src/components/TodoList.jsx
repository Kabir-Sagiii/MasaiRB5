import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { todoActionCreator } from "../redux/ActionCreators";

function TodoList(props) {
  const dispatch = useDispatch();
  const data = useSelector((store) => {
    // {myReducer:{---},todoReducer:{todo:[]}}
    return store.todoReducer.todo;
  });

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      //   console.log(res.data);
      dispatch(todoActionCreator(res.data));
    });
  }, []);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`).then(() => {
      axios.get("http://localhost:3000/users").then((res) => {
        dispatch(todoActionCreator(res.data));
      });
    });
  };
  return (
    <div>
      <h2 style={{ color: "green" }}>Todo List</h2>
      {data.length > 0 ? (
        <div>
          {data.map((user) => {
            return (
              <div style={{ marginTop: "30px" }}>
                <span>{user.name}</span>&nbsp;&nbsp;&nbsp;
                <button
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <h3 style={{ color: "red" }}>No Data</h3>
      )}
    </div>
  );
}

export default TodoList;
