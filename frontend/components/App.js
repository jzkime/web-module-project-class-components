import React from 'react'
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentState: '',
    }
  }

  createObj = (title) => {
    const newObj = {
      name: title,
      id: Date.now()
    }

    this.setState({
      todos: [...this.state.todos, newObj]
    })
  }


  changeHandler = (e) => {
    this.setState({
      currentState: e.target.value,
    })
  }

  submitHandler = (e) => {
    e.preventDefault();

    this.createObj(this.state.currentState);

    this.setState({
      currentState: ''
    })
  }

  render() {
    return (
      <div>
        Todo App

        <TodoList todos={this.state.todos}/>

        <Form 
        addNew={this.createObj} 
        submitHandler={this.submitHandler} 
        changeHandler={this.changeHandler} 
        current={this.state.currentState}
        />
      </div>
    )
  }
}
