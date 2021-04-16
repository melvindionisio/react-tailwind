import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="p-4 space-y-4 transition bg-gradient-to-br from-pink-600 to-red-500 rounded-xl rounded-t-2xl">
      <h2 className="my-2 mb-4 text-xl font-light text-white text-opacity-75">
        Active Task
      </h2>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
