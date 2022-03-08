import Task from './Task';
import React from 'react';
import { nanoid } from 'nanoid'


function App() {
  const [input, setInput] = React.useState("")
  const [task, setTask] = React.useState(JSON.parse(localStorage.getItem('tasks')) || [])
  const [numTasks, setNumTasks] = React.useState(task.length)
  const [numCompleted, setNumCompleted] = React.useState(0)


  React.useEffect(() => { //update the number of tasks and the number of completed tasks
    setNumTasks(task.length)
  }, [task])

  React.useEffect(() => { // store the tasks in localStorage, so the tasks persist after a refresh
    localStorage.setItem('tasks', JSON.stringify(task))
  }, [task])

  const countCompleted = React.useCallback((tasks) => { // figures out the number of updated tasks
    let num = 0
    for(let i = 0; i < tasks.length; i++){
      if(tasks[i].completed){
        num++
      }
    }
    return num
  }, [task])

  React.useEffect(() => { // updates the number of completed tasks
    setNumCompleted(countCompleted(task))
  }, [countCompleted, task])

  
  

  function getInput(event){ //gets user input
    setInput(event.target.value)
  }

  function addTask(){ //adds a task
    if(input !== ""){
      setTask([...task, {id: nanoid(), body: input, completed: false, color: ''}])
      setInput("")
    }
  }
  
  function deleteTask(taskId){ //removes a task
    setTask((prevTasks) => prevTasks.filter(prevTask => prevTask.id !== taskId))
  }

  function isComplete(taskId){ //when completed checkbox is clicked the value is updated
    setTask(prevTasks => prevTasks.map(prevTask => {
      if(prevTask.id === taskId){
        return { ...prevTask,  completed : !prevTask.completed} 
      }
      return prevTask
    }))
  }

  function changeColor(color, taskId){ // changes the color of the task
    
    setTask(prevTasks => prevTasks.map(prevTask => {
      if(prevTask.id === taskId){
        return { ...prevTask,  color : color} 
      }
      return prevTask
    }))
  }

  
  let taskList = task.map(item => <li><Task //tasks to be rendered
    key={item.id}
    body={item.body} 
    id={item.id} 
    delete={deleteTask}
    completed={item.completed}
    isComplete={isComplete}
    color={item.color}
    changeColor={changeColor}
    // date={item.date}
  /></li>)
  

  return (
    <div className="App">
      <input value={input} onChange={getInput}type='text'/>
      <button onClick={addTask}>Add Task</button>
      <h3>Tasks: {numTasks}</h3>
      <h3>Completed Tasks: {numCompleted}</h3>
      <div className="Tasks">
        <ul>
        {taskList}
        </ul>
      </div>
    </div>
  );
}

export default App;
