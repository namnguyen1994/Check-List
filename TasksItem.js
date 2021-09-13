import React from "react"

function TasksItem(props){
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="Task-Item">
            <input
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed? completedStyle: null}>{props.item.text}</p>
            <hr/>
        </div>
    )
}

export default TasksItem