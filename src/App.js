import "./Animations.css";
import React from 'react'
import { useState, useRef } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(() => [
    {
      id: 1,
      taskTitle: "Welcome!",
      taskDescription: "This is a fucking web pad",
      reminder: false,
      startDates: "4/12/2021, 7:05 PM",

    },
    {
      id: 2,
      taskTitle: "You can add task",
      taskDescription: "but it doesn't mean you should do it ahah",
      reminder: false,
      startDates: "4/13/2021, 4:07 PM",

    },
    {
      id: 3,
      taskTitle: "Turn on reminder",
      taskDescription: "by double tapping a task",
      reminder: true,
      startDates: "4/14/2021, 4:05 PM",
    },
  ])
  const webpad = useRef(null);
  const taskRef = React.createRef(null);


  
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([newTask, ...tasks])
    setShowAddTask(false)

    webpad.current.classList.add('fade-in')
    setTimeout(()=> {
      webpad.current.classList.contains('fade-in') && webpad.current.classList.remove('fade-in') 
    },550);

  
    const refTask = taskRef.current;  
    refTask.classList.add('bubble');
    console.log(refTask)
    setTimeout(()=> {
      refTask.classList.contains('bubble') && refTask.classList.remove('bubble') 
    },500);
  } 

  // Delete task
  const deleteTask = (id) => {
    /* const refTask = taskRef.current;
    refTask.classList.add('fade-in-out')
    setTimeout(()=> {
      refTask.classList.contains('fade-in-out') && refTask.classList.remove('fade-in-out') 
    },500); */
    
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task)
    )
  }
  return (
    <div className="grid items-start min-h-screen p-4 text-gray-800 bg-gray-900 select-none place-items-center" >
      <div className="w-full bg-gray-800 shadow-lg rounded-xl rounded-t-2xl md:w-9/12 lg:w-6/12" 
      ref={webpad} 
      >
        
        <Header 
        onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

        { showAddTask && <AddTask  onAdd={addTask} /> }
        <div>
           <Tasks ref={taskRef} tasks={ tasks } onDelete={deleteTask} onToggle={toggleReminder} />
        </div>
       
      </div>
    </div>
  );
}


export default App
