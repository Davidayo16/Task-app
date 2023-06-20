import React, { useEffect } from "react";
import { ReactDOM } from "react-dom";
import Header from "./Header";
import Tasks from "./Tasks";
import Form from "./Form";

const storeLocalStorage = () => {
  let li = localStorage.getItem("tas");
  if (li) {
    return JSON.parse(localStorage.getItem("tas"));
  } else {
    return [];
  }
};

function App() {
  const [tasks, setTask] = React.useState(storeLocalStorage());
  const [filteredTask, setfilteredTak] = React.useState([]);
  const [showAddTask, setShowAddTask] = React.useState(false);
  function deleteTask(id) {
    setTask(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  }
  function remindTask(id) {
    setTask(
      tasks.map((task) => {
        return task.id === id ? { ...task, remainder: !task.remainder } : task;
      })
    );
  }

  function removeTask() {
    setShowAddTask(!showAddTask);
  }

  function addTask(task) {
    console.log(task);
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTask([...tasks, newTask]);
    console.log(tasks);
  }
  React.useEffect(() => {
    localStorage.setItem("tas", JSON.stringify(tasks));
  }, [tasks]);

  const handleSearch = (e) => {
    const keyword = e.target.value;
    if (keyword !== "" && keyword.length > 1) {
      const newItem = [...tasks];
      const dave = newItem.filter((item) => {
        return item.text.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setfilteredTak(dave);
      console.log(filteredTask);
    } else {
      setfilteredTak([]);
    }
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <Header task={tasks} show={showAddTask} onRemove={removeTask} />
          {tasks.length !== 0 && (
            <div className="search-cont">
              <input
                type="text"
                onChange={(e) => handleSearch(e)}
                placeholder="Search tasks.."
              />
            </div>
          )}
          {showAddTask ? (
            <Form onAdd={addTask} />
          ) : (
            tasks.length === 0 && (
              <p className="message">You have no task to show</p>
            )
          )}
          <Tasks
            task={tasks}
            filteredTask={filteredTask}
            onDelete={deleteTask}
            onRemainder={remindTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
