import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ]);

  const addTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: tasks[tasks.length - 1].id + 1,
        ...task,
      },
    ]);
  };

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const toggleAddTaskShow = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="container">
      <Header
        title="Task tracker"
        onAdd={toggleAddTaskShow}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
