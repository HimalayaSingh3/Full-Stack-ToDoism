import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CircleCheckBig, Edit, Trash } from "lucide-react";

const Todo = () => {
  const [text, setText] = useState(""); // Input for new tasks
  const [tasks, setTasks] = useState([]); // List of tasks
  const [search, setSearch] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    if (text.trim() === "" || time.trim() ==="" || description.trim() === "") return; // Ignore empty input
    setTasks([...tasks, { text: text, completed: false, time: time ,description: description}]); // Add new task
    setText("");
    setTime("");
    setDescription(); // Clear input fields
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center w-screen p-6">
      <div className="border rounded-xl p-6 w-full">
        <h1 className="text-xl font-bold">To-Do List</h1>
        <div className="mt-2">
          <Input
            type="text"
            placeholder="Add a task..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <Input
            type="text"
            placeholder="Description..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <Input
            type="text"
            placeholder="Add time..."
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
          <Button onClick={addTask} className="mt-4 w-full">
            Add
          </Button>
        </div>
      </div>
      <div className="mt-6 w-full">
        <Input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <ul className="w-full">
        {filteredTasks.map((task, index) => (
          <li key={index} className="border p-6 mt-4 rounded-xl flex flex-col">
            <a>Task: {task.text}</a>
            <a>Description: {task.description}</a>
            <a>Time: {task.time}</a>
            <div className="flex justify-between mt-6">
              <CircleCheckBig className="text-green-600 cursor-pointer" />
              <Edit className="text-blue-600 cursor-pointer" />
              <Trash className="cursor-pointer text-red-600" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
