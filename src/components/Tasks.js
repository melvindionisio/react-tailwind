import Task from "./Task";
import React from "react";

const Tasks = React.forwardRef(({ tasks, onDelete, onToggle }, ref) => (
  <div
    className="p-4 space-y-4 transition bg-gradient-to-br from-pink-600 to-yellow-300 rounded-xl rounded-t-2xl"
    ref={ref}
  >
    <h2 className="my-2 mb-4 text-xl font-light text-white text-opacity-75">
      {tasks.length > 0 ? "Active Task" : "No task to show"}
    </h2>
    {tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
        onDelete={onDelete}
        onToggle={onToggle}
        /*  ref={ref} */
      />
    ))}
  </div>
));

export default Tasks;
