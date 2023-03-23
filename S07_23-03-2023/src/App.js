import "./App.css";
import { useState } from "react";
// import Parent from "./Components/Parent-child/Parent";
import Parent from "./Components/Child-Parent/Parent";
import Image from "./Components/Lifecyle/Image";
import Text from "./Components/Lifecyle/Text";
import Users from "./Components/Lifecyle/Users";

function App() {
  const [showImage, setShowImage] = useState(true);
  return (
    <div className="App">
      {/* <Users /> */}
      {showImage ? <Image /> : <Text />}
      <br />
      <br />
      <button
        onClick={() => {
          setShowImage(true);
        }}
      >
        Show Image
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          setShowImage(false);
        }}
      >
        Show Text
      </button>
    </div>
  );
}

export default App;
