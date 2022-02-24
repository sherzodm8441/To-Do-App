import Task from './Task';
import React from 'react';


function App() {
  const [input, setInput] = React.useState("")
  const [task, setTask] = React.useState([])

  function getInput(event){
    setInput(event.target.value)
  }

  function addTask(){
    if(input !== ""){
      setTask([...task, <li><Task task={input}/></li>])
      setInput("")
    }
  }
  

  return (
    <div className="App">
      <input value={input} onChange={getInput}type='text'/>
      <button onClick={addTask}>Add Task</button>
      <div className="Tasks">
        <ul>
        {task}
        </ul>
      </div>
    </div>
  );
}

export default App;
