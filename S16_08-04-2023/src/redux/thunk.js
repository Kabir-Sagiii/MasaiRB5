import axios from "axios";
import { todoActionCreator } from "./ActionCreators";

// function thunkFn(dispatch, getState) {
//   const getData = () => {
//     axios.get("http://localhost:3000/users").then((res) => {
//       dispatch(todoActionCreator(res.data));
//     });
//   };

//   const deleteUser = (id) => {
//     axios.delete(`http://localhost:3000/users/${id}`).then(() => {
//       axios.get("http://localhost:3000/users").then((res) => {
//         dispatch(todoActionCreator(res.data));
//       });
//     });
//   };

//   getData();
// }

// export default thunkFn;

function thunkActionCreator(methodType, id, user, setUser) {
  return function (dispatch, getState) {
    const getData = (dispatch) => {
      axios.get("http://localhost:3000/users").then((res) => {
        dispatch(todoActionCreator(res.data));
      });
    };

    const deleteUser = (dispatch, id) => {
      axios.delete(`http://localhost:3000/users/${id}`).then(() => {
        axios.get("http://localhost:3000/users").then((res) => {
          dispatch(todoActionCreator(res.data));
        });
      });
    };

    const sendDataToServer = (dispatch, user, setUser) => {
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

    if (methodType === "get") {
      getData(dispatch);
    } else if (methodType === "delete") {
      deleteUser(dispatch, id);
    } else if (methodType === "post") {
      sendDataToServer(dispatch, user, setUser);
    }
  };
}

export default thunkActionCreator;
