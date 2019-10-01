import React from 'react';

import './components/TodoComponents/Todo.css'

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: this.getFromLocal(),
      input: '',
    };
  }

  saveToLocal = () => {
    window.localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
  }

  getFromLocal = () => {
    let dummyTask = {
      title: 'Your first task!',
      description: 'Use the task tracker to create a new task and even add some steps',
      id: Date.now(),
      steps: [{
        title: 'Complete your first step.',
        description: 'This is a description of a step.',
        completed: false,
        optional: true
      },
      {
        title: 'Complete your second step.',
        description: 'This is a description of a step.',
        completed: false,
        optional: false
      },
      {
        title: "Complete your third step, if you'd like",
        description: 'This is a description of a step.',
        completed: false,
        optional: true
      },
      {
        title: 'Complete your final step.',
        description: 'This is a description of a step.',
        completed: false,
        optional: false
      }
      ],
      completed: false
    }

    let data = JSON.parse(window.localStorage.getItem('todoList'));

    return (data === null) ? [dummyTask] : data;
  }

  handleInputChange = e => {
    this.setState({ input: e.target.value });
  }

  handleCreateTask = task => {
    task.id = Date.now();
    task.completed = false;
    this.setState({ todoList: [...this.state.todoList, task] })
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

  toggleTaskComplete = task => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todo.id === task.id) {
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
      <div className="App">
        <header>
          <h1> taskTracker </h1>
        </header>
        <div className="todo_wrapper">
          <TodoList todos={this.state.todoList} toggleTaskComplete={this.toggleTaskComplete} />
          <TodoForm
            handleInputChange={this.handleInputChange}
            handleSubmitClick={this.handleSubmitClick}
            handleClearCompleted={this.handleClearCompleted}
            handleSaveTasks={this.handleSaveTasks}
            handleClearAll={this.handleClearAll}
            handleCreateTask={this.handleCreateTask} />
        </div>
      </div>
    );
  }
}

export default App;
