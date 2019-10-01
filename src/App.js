import React from 'react';

import './components/TodoComponents/Todo.css'

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: this.getFromLocal(),
      input: ''
    };
  }


  saveToLocal = () => {
    window.localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
  }

  getFromLocal = () => {
    let data = JSON.parse(window.localStorage.getItem('todoList'));
    return (data === null) ? [] : data;
  }

  handleInputChange = e => {
    this.setState({ input: e.target.value });
  }

  handleSubmitClick = e => {
    e.preventDefault();
    this.setState({ todoList: [...this.state.todoList, { task: this.state.input, id: Date.now(), completed: false }] })
    this.saveToLocal();
  }

  handleTaskClick = obj => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todo.id === obj.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        else {
          return todo;
        }
      })
    })
  }

  handleClearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(todo => {
        return (!todo.completed);
      })
    })
    console.log('test')
  }

  handleSaveTasks = () => {
    this.saveToLocal();
  }

  handleClearAll = () => {
    this.setState({ todoList: [] });
  }

  render() {
    return (
      <div classname="App">
        <header>
          <h1> task tracker </h1>
        </header>
        <div className="todo_wrapper">
          <TodoList todos={this.state.todoList} handleTaskClick={this.handleTaskClick} />
          <TodoForm
            handleInputChange={this.handleInputChange}
            handleSubmitClick={this.handleSubmitClick}
            handleClearCompleted={this.handleClearCompleted}
            handleSaveTasks={this.handleSaveTasks}
            handleClearAll={this.handleClearAll} />
        </div>
      </div>
    );
  }
}

export default App;
