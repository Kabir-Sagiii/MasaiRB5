import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function QueryParams(props) {
  const [searchparam, setSearchParam] = useSearchParams();
  //   setSearchParam({ name: "Kabir", city: "Delhi" });
  useEffect(() => {
    setSearchParam({ name: "Kabir", city: "Delhi" });
  }, []);
  const getQueryParams = () => {
    var nameValue = searchparam.get("name");
    alert(nameValue);
  };
  return (
    <div style={{ color: "darkgreen", textAlign: "center" }}>
      <h2>Query PArameter</h2>
      <button
        onClick={() => {
          setSearchParam({ name: "Sagar", email: "kabir@masai.in" }); //re-render
        }}
      >
        Change query Params
      </button>
      <button onClick={getQueryParams}>Access Query Params</button>
    </div>
  );
}

export default QueryParams;
