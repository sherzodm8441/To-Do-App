import React from "react";



export default function Task(props){
    return(
        <div>
            <p>{props.task}</p>
            <button>Remove Task</button>
        </div>
    )
}