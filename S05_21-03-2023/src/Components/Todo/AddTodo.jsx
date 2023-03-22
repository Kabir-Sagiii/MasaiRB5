import { useState } from "react";
import TodoItem from "./TodoItem";

function AddTodo(props) {
  const [state, setState] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const addTodoItem = () => {
    //In React Never update Array or Object, We have to replace array and object
    var newItem = {
      title: state,
      status: true,
    };
    setTodoItems([...todoItems, newItem]);
  };

  const handleToggle = (index) => {
    var newArray = todoItems.map((item, i) => {
      return index === i ? { ...item, status: !item.status } : item;
    });
    setTodoItems(newArray);
  };

  const deleteItem = (index) => {
    var filteredData = todoItems.filter((item, i) => {
      return index != i;
    });

    setTodoItems(filteredData);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Todo Example</h2>
      <input
        value={state}
        type="text"
        placeholder="Enter Some Text"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <button onClick={addTodoItem}>Add Item</button>
      <TodoItem
        todoitem={todoItems}
        deleteItem={deleteItem}
        handleToggle={handleToggle}
      />
    </div>
  );
}

export default AddTodo;
