import { useContext } from "react";
import "./Nav.css";
import { AuthContext } from "../Context-API-2/CustomProvider";
function Nav(props) {
  const { isloggedin, logout } = useContext(AuthContext);
  return (
    <div className="nav">
      <div className="title">
        <h2>React Context</h2>
      </div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Profile</a>
        <a href="#">Support</a>
        {isloggedin ? (
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Nav;
