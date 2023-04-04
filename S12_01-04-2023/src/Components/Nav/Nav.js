import { useContext } from "react";
import "./Nav.css";
import { AuthContext } from "../Context-API-2/CustomProvider";
import { Link, useNavigate } from "react-router-dom";
function Nav(props) {
  const naviagte = useNavigate();
  const { isloggedin, logout } = useContext(AuthContext);
  return (
    <div className="nav">
      <div className="title">
        <h2>React Context</h2>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/support">Support</Link>
        {isloggedin ? (
          <button
            onClick={() => {
              logout();
              naviagte("/");
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
