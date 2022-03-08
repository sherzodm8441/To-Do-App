import React from "react";
import './style.css';



export default function Task(props){
    const completed = props.completed

    return(
        <div key={props.id} className='task-border' style={{borderColor: props.color}}>
            <div className={'colors'}>
                    <div onClick={() => props.changeColor('green', props.id)} className='green'></div>
                    <div onClick={() => props.changeColor('orange', props.id)} className='yellow'></div>
                    <div onClick={() => props.changeColor('red', props.id)} className='red'></div>
                </div>
            <p style={{textDecoration : (completed?'line-through':'none')}}>{props.body}</p>
            <div className='features'>
                <label>Due Date <input type='date'/></label>
                <button onClick={() => props.delete(props.id)}>Remove Task</button>
                <label><input type='checkbox' checked={props.completed} onChange={() => props.isComplete(props.id)}/>Completed</label>
            </div>
            
        </div>
    )
}