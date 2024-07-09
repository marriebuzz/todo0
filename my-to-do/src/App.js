import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [backlog, setBacklog] = useState([
    "Download Android app",
    "Change and update account details in the iOS app",
  ]);
  const [inProgress, setInProgress] = useState([
    "Set up recurring utilities payments",
    "View transaction history by category",
    "Set and monitor progress on financial goals",
  ]);
  const [done, setDone] = useState([
    "Download iOS app",
    "Transfer money between accounts",
  ]);

  const addTaskToBacklog = () => {
    if (task.trim()) {
      setBacklog([...backlog, task]);
      setTask("");
    }
  };

  const moveTask = (task, from, to, setFrom, setTo) => {
    setFrom(from.filter((t) => t !== task));
    setTo([...to, task]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kanban Board</h1>
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter new task"
          />
          <button onClick={addTaskToBacklog}>Add Task</button>
        </div>
        <div className="board">
          <div className="column">
            <h2>Backlog | {backlog.length}</h2>
            <ul className="task-list">
              {backlog.map((task, index) => (
                <li key={index} className="task-item">
                  {task}
                  <button
                    onClick={() =>
                      moveTask(
                        task,
                        backlog,
                        inProgress,
                        setBacklog,
                        setInProgress
                      )
                    }
                  >
                    Start
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="column">
            <h2>In Progress | {inProgress.length}</h2>
            <ul className="task-list">
              {inProgress.map((task, index) => (
                <li key={index} className="task-item">
                  {task}
                  <button
                    onClick={() =>
                      moveTask(task, inProgress, done, setInProgress, setDone)
                    }
                  >
                    Complete
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="column">
            <h2>Done | {done.length}</h2>
            <ul className="task-list">
              {done.map((task, index) => (
                <li key={index} className="task-item">
                  {task}
                  <button
                    onClick={() =>
                      moveTask(task, done, backlog, setDone, setBacklog)
                    }
                  >
                    Revert
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
