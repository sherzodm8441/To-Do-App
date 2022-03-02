import React from "react";
import './task.css';



export default function Task(props){
    const completed = props.completed

    return(
        <div key={props.id} className='task-border'>
            <p style={{textDecoration : (completed?'line-through':'none')}}>{props.body}</p>
            <button onClick={() => props.delete(props.id)}>Remove Task</button>
        </div>
    )
}