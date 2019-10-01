import React from 'react';

function Todo(props) {
    console.log(props)
    let classStr = 'todo';
    classStr += props.todo.completed ? ' todo-completed' : ''
    return (
        <div className={`${classStr}`}>
            <h2 onClick={() => props.handleTaskClick(props.todo)}>{props.todo.task}</h2>
        </div>
    );
}

export default Todo;