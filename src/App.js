import "./Animations.css";
import React from 'react'
import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
// import Footer from "./components/Footer"


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
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
      taskDescription: "but it does not mean you need to do it ahah",
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
  
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([newTask, ...tasks])
    setShowAddTask(false)
  } 

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task)
    )
  }
  return (
    <div className="grid items-start min-h-screen p-4 text-gray-800 bg-gray-900 select-none place-items-center">
      <div className="w-full bg-gray-800 shadow-lg rounded-xl rounded-t-2xl md:w-9/12 lg:w-6/12">
        <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

        {showAddTask && <AddTask onAdd={addTask} />}
        
        {tasks.length > 0 ? <Tasks tasks={ tasks } onDelete={deleteTask} onToggle={toggleReminder}/> : 'No task to show'}
       
        {/* <Footer /> */}

      </div>
    </div>
  );
}


export default App
