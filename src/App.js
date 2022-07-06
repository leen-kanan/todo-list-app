import "./App.css";
import { useState } from "react";
import { Item } from "./component/item";

function App() {
  const data = [
    "Wake Up early",
    "Breakfast",
    "Yoga",
    "Study",
    "Gym for 30mins",
    "Cook",
    "Lunch",
    "Read a book",
    "Sleep at 11pm",
  ];
  const [tasks, setTasks] = useState(data);

  const handleAddTodoInput = (event) => {
    if (event.type === "keyup" && event.key === "Enter") {
      handleAddTodo(event);
    }
  };

  const handleAddTodo = (event) => {
    let newTask = document.querySelector(".newTodo").value;
    if (!newTask) return;
    setTasks([...tasks, newTask]);
    newTask = document.querySelector(".newTodo").value = "";
  };

  const handleClear = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <input
        type="text"
        placeholder="Add a new task"
        className="newTodo"
        onKeyUp={handleAddTodoInput}
      />
      <button onClick={handleAddTodo} className="sbmtBtn">
        Submit
      </button>
      <section className="tasksList">
        {tasks.map((item, index) => (
          <Item
            data={item}
            key={index}
            handleDeleteTodo={() =>
              setTasks(tasks.filter((_, i) => index !== i))
            }
          />
        ))}
      </section>
      <button className={"clear"} onClick={handleClear}>
        Clear
      </button>

      <footer>Made with ❤️ by Leen </footer>
    </div>
  );
}

export default App;
