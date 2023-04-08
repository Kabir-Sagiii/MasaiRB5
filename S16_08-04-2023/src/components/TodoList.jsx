import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import thunkActionCreator from "../redux/thunk";

function TodoList(props) {
  const dispatch = useDispatch();
  const data = useSelector((store) => {
    return store.todoReducer.todo;
  });

  useEffect(() => {
    // dispatch(thunkFn);
    dispatch(thunkActionCreator("get", null));
  }, []);

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
                    dispatch(thunkActionCreator("delete", user.id));
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
