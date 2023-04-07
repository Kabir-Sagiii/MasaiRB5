import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
