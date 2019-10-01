import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

function TodoForm(props) {

    return (
        <div className="todo_form">
            <FormControl >
                <TextField label='Enter new task' margin='normal' variant='filled' required='true' onFocus={e => e.target.value = ''} onChange={props.handleInputChange} />
                <Button onClick={e => props.handleSubmitClick(e)} variant='contained' color='primary' type="submit">Add Task</Button>
                <Button variant='contained' color='primary' onClick={props.handleSaveTasks}> Save Tasks </Button>
                <Button variant='contained' color='secondary' onClick={props.handleClearCompleted}> Clear Completed </Button>
                <Button variant='contained' color='secondary' onClick={props.handleClearAll}> Clear All </Button>
            </FormControl>
        </div>
    );
}

export default TodoForm;