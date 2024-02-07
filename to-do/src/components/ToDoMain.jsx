import React, { useContext, useReducer } from "react";
import "../todo.css";
import { ListContext } from "../contexts/ToDoListContext";
import { TaskListReducer } from "../reducers/TaskListReducer";


export default function ToDoMain(props) {
    const tasksList = useContext(ListContext);
    const [tasks, dispactch] = useReducer(TaskListReducer, tasksList);

    
    function handleSubmit(e) {
        e.preventDefault();
        dispactch({
            type: "ADD_TASK",
            data: "Task x"
        })
    }
    return (
    <div className="wrapper-div">
        <div className="main-header">
            Get Things Done!
        </div>
        <div className="form-div">
            <form className="form-main">
                <input className="form-input" type="text" placeholder="Enter The Task You Wish To Complete" />
                <button className="form-submit" onClick={handleSubmit}>Add Task</button> 
            </form>
        </div>
        <div>
            <h1>{tasks}</h1>
        </div>
    </div>    
    )
}