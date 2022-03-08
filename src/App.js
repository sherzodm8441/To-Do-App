import Task from './Task';
import React from 'react';


function App() {
  const [input, setInput] = React.useState("")
  // const [task, setTask] = React.useState(JSON.parse(localStorage.getItem('tasks')) || [])
  const [task, setTask] = React.useState([])
  const [counter, setCounter] = React.useState(1)
  const [numTasks, setNumTasks] = React.useState(task.length)
  const [numCompleted, setNumCompleted] = React.useState(0)

  React.useEffect(() => { //update the number of tasks and the number of completed tasks
    setNumTasks(task.length)
  }, [task])

  // React.useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(task))
  // }, [task])

  const countCompleted = React.useCallback((tasks) => {
    let num = 0
    for(let i = 0; i < tasks.length; i++){
      if(tasks[i].completed){
        num++
      }
    }
    return num
  }, [task])

  React.useEffect(() => {
    setNumCompleted(countCompleted(task))
  }, [countCompleted, task])

  
  

  function getInput(event){ //gets user input
    setInput(event.target.value)
  }

  function addTask(){ //adds a task
    if(input !== ""){
      setTask([...task, {id: counter, body: input, completed: false, color: ''}])
      setCounter(counter + 1)
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

  function changeColor(color, taskId){
    
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
  /></li>)
  

  return (
    <div className="App">
      <input value={input} onChange={getInput}type='text'/>
      <button onClick={addTask}>Add Task</button>
      <h3>Number of Tasks: {numTasks}</h3>
      <h3>Number of Completed Tasks: {numCompleted}</h3>
      <div className="Tasks">
        <ul>
        {taskList}
        </ul>
      </div>
    </div>
  );
}

export default App;
