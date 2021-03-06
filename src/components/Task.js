import { FaRegTrashAlt } from "react-icons/fa";
import React from "react";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`p-2 bg-gray-100 border-l-8 shadow-lg rounded-md ${
        task.reminder ? "border-blue-400 " : "border-transparent"
      }`}
      onDoubleClick={() => onToggle(task.id)}
      // ref={ref}
    >
      <h3 className="flex items-center justify-between w-full text-xl font-normal">
        {task.taskTitle}
        <FaRegTrashAlt
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <div className="flex">
        <h4 className="inline-block w-9/12 text-base font-light">
          {task.taskDescription}
        </h4>
      </div>

      <div className="flex">
        <h4 className="inline-block w-6/12 text-xs italic font-bold text-gray-400">
          {task.startDates}
        </h4>
        <span className="w-6/12 text-xs font-semibold text-right text-blue-500 uppercase justify-self-end ">
          {task.reminder ? "Reminder On" : ""}
        </span>
      </div>
    </div>
  );
};
export default Task;
