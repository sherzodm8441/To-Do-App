import React from "react";
import './task.css';



export default function Task(props){
    const completed = props.completed

    return(
        <div key={props.id} className='task-border'>
            <p style={{textDecoration : (completed?'line-through':'none')}}>{props.body}</p>
            <button onClick={() => props.delete(props.id)}>Remove Task</button>
            <label><input type='checkbox' checked={props.completed} onChange={() => props.isComplete(props.id)}/>Completed</label>
        </div>
    )
}