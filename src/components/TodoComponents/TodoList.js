import React from 'react';
import Todo from './Todo';

function TodoList(props) {

    return (
        <div className="todo_list">
            {props.todos.map(todo => {
                return <Todo todo={todo} key={todo.id} handleTaskClick={props.handleTaskClick} />
            })}
        </div>
    );
}

export default TodoList;