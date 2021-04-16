import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTask = ({ onAdd }) => {
  const [taskTitle, setTitle] = useState("");
  const [taskDescription, setDescription] = useState("");
  const [reminder, setReminder] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();

    if (!taskTitle) {
      alert("Please add Task");
      return;
    }
    /*  if(!day){
      setDasetDescription('no date')
      return
    } */
    const startDates = startDate.toLocaleString();

    onAdd({ taskTitle, taskDescription, startDates, reminder });

    setTitle("");
    setDescription("");
    setReminder(false);
  };
  return (
    <form
      className="flex flex-col p-4 space-y-4 font-semibold text-gray-400"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="taskTitle" className="cursor-pointer">
          Title
        </label>
        <input
          className="p-2 mt-2 text-gray-800 transition rounded bg-green-50 focus:ring-4 focus:ring-blue-400 focus:outline-none"
          name="taskTitle"
          id="taskTitle"
          type="text"
          autocomplete="off"
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="task" className="cursor-pointer">
          Task
        </label>
        <textarea
          className="p-2 mt-2 text-gray-800 transition rounded resize-none bg-green-50 focus:ring-4 focus:ring-blue-400 focus:outline-none"
          name="task"
          id="task"
          rows="3"
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {/*  <input
          className="p-2 mt-2 transition rounded focus:ring-4 focus:ring-blue-300 focus:outline-none"
          type="text"
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setDescription(e.target.value)}
        /> */}
      </div>
      <div className="flex flex-col">
        <label>Date & Time</label>
        <DatePicker
          style={{ cursor: "pointer" }}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          dateFormat="Pp"
        />
      </div>
      <div className="flex items-center space-x-4">
        <label htmlFor="reminder">
          <span>Set Reminder</span>
        </label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          name="reminder"
          id="reminder"
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input
        className="px-4 py-2 mb-4 text-gray-100 transition transform bg-gray-700 rounded active:scale-95 focus:outline-none"
        type="submit"
        value="Save Task"
      />
    </form>
  );
};

export default AddTask;
