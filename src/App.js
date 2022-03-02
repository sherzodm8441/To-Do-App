import Task from './Task';
import React from 'react';


function App() {
  const [input, setInput] = React.useState("")
  const [task, setTask] = React.useState([])
  const [counter, setCounter] = React.useState(1)

  function getInput(event){
    setInput(event.target.value)
  }

  function addTask(){
    if(input !== ""){
      setTask([...task, {id: counter, body: input, completed: false}])
      setCounter(counter + 1)
      setInput("")
    }
  }

  //<li><Task task={input} key={counter} id={counter} delete={deleteTask}/></li>
  
  function deleteTask(taskId){
    setTask((prevTasks) => prevTasks.filter(prevTask => prevTask.id !== taskId))
  }

  const tasksList = task.map(item => <li><Task 
    body={item.body} 
    id={item.id} 
    delete={deleteTask}
    completed={item.completed}
    /></li>)

  return (
    <div className="App">
      <input value={input} onChange={getInput}type='text'/>
      <button onClick={addTask}>Add Task</button>
      <div className="Tasks">
        <ul>
        {tasksList}
        </ul>
      </div>
    </div>
  );
}

export default App;
