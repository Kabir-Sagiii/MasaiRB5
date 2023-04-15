import { Button, Container, Heading } from "@chakra-ui/react";
import { useReducer } from "react";

const myReducer = (state, action) => {
  if (action.type === "inc") {
    return {
      ...state,
      count: state.count + action.payload,
    };
  } else if (action.type === "dec") {
    return {
      ...state,
      count: state.count - action.payload,
    };
  }
  return state;
};

function UseReducerComp(props) {
  const [state, dispatch] = useReducer(myReducer, {
    count: 0,
    products: [],
    users: [],
    post: [],
  });
  return (
    <Container mt="100px">
      <Heading mb="20px">Count Value :{state.count}</Heading>
      <Button
        color="green"
        onClick={() => {
          dispatch({
            type: "inc",
            payload: 5,
          });
        }}
      >
        Increase Count
      </Button>
      <Button
        color="Red"
        onClick={() => {
          dispatch({
            type: "dec",
            payload: 2,
          });
        }}
      >
        Decrease Count
      </Button>
      <Button color="black">Reset Count</Button>
    </Container>
  );
}

export default UseReducerComp;
