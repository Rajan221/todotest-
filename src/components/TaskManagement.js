import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const TaskManagement = () => {
  const [task, setTask] = useState("");

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/tasks");
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "Failed to fetch tasks");
    }
  };

  const {
    data: tasks,
    isLoading,
    error,
    refetch,
  } = useQuery("tasks", fetchTasks);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/tasks", { title: task });
      setTask("");
      refetch();
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/tasks/${taskId}`);
      refetch();
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div>
      <h2>Task Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter task..."
          required
        />
        <button type="submit">Add Task</button>
      </form>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <ul>
        {tasks &&
          tasks.map((task) => (
            <li key={task.id}>
              {task.title}{" "}
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TaskManagement;
