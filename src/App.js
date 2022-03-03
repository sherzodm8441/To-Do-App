import Task from './Task';
import React from 'react';


function App() {
  const [input, setInput] = React.useState("")
  const [task, setTask] = React.useState([])
  const [counter, setCounter] = React.useState(1)
  

  function getInput(event){ //gets user input
    setInput(event.target.value)
  }

  function addTask(){ //adds a task
    if(input !== ""){
      setTask([...task, {id: counter, body: input, completed: false}])
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

  
  
  let taskList = (task).map(item => <li><Task //tasks to be rendered
    key={item.id}
    body={item.body} 
    id={item.id} 
    delete={deleteTask}
    completed={item.completed}
    isComplete={isComplete}
  /></li>)
  
  console.log(task)

  return (
    <div className="App">
      <input value={input} onChange={getInput}type='text'/>
      <button onClick={addTask}>Add Task</button>
      <div className="Tasks">
        <ul>
        {taskList}
        </ul>
      </div>
    </div>
  );
}

export default App;
