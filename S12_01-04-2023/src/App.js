import "./App.css";
import { useContext } from "react";
import Nav from "./Components/Nav/Nav";
// import Parent from "./Components/Parent-child/Parent";
// import Dummy from "./Components/Parent-child/dummy";
// import A from "./Components/Context-API/A";
import Login from "./Components/Context-API-2/Login";
import Error from "./Components/Routing/Error";
import Home from "./Components/Context-API-2/Home";
import { AuthContext } from "./Components/Context-API-2/CustomProvider";
import Profile from "./Components/Routing/Profile";
import Products from "./Components/Routing/Product";
import Support from "./Components/Routing/Support";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/Routing/ProductDetails";
import QueryParams from "./Components/Routing/QueryParams";
import ProtectedPrivate from "./Components/Routing/ProtectedPrivate";

function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div className="App">
      {isloggedin ? <Nav /> : null}

      {/* {isloggedin ? <Home /> : <Login />} */}
      <Routes>
        <Route path="/" element={isloggedin ? <Home /> : <Login />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/profile"
          element={
            <ProtectedPrivate>
              <Profile />
            </ProtectedPrivate>
          }
        />
        <Route path="/support" element={<Support />} />
        <Route path="/queryparams" element={<QueryParams />} />
        <Route path="/error" element={<Error />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>

      {/* <A /> */}

      {/* <Parent> This is Parent Component </Parent>
      <Parent>
        <Dummy />
      </Parent> */}
    </div>
  );
}

export default App;
