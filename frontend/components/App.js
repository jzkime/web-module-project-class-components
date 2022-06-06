import React from 'react'
import TodoList from './TodoList';
import Form from './Form';

const initialTodos = [
  {
    name: "Drink water",
    id: 123,
    completed: false
  }
]

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: initialTodos,
      currentState: '',
      hidden: false
    }
  }

  createObj = (title) => {
    const newObj = {
      name: title,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newObj]
    })
  }

  completeHandler = (itemID) => {
    const updated = this.state.todos.map(item => {
      if(item.id === itemID) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    })

    this.setState({
      todos: updated
    })
  }

  hideCompleted = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  changeHandler = (e) => {
    this.setState({currentState: e.target.value,}) // sets currentState to the value
  }

  submitHandler = (e) => {
    e.preventDefault(); // prevents default of page refresh
    this.createObj(this.state.currentState); // uses the createObj function
    this.setState({currentState: ''}); // reset form input 
  }

  render() {
    return (
      <div>

        <TodoList todos={this.state.todos} complete={this.completeHandler} hidden={this.state.hidden}/>

        <Form 
        addNew={this.createObj} 
        submitHandler={this.submitHandler} 
        changeHandler={this.changeHandler} 
        current={this.state.currentState}
        hide={this.hideCompleted}
        hidden={this.state.hidden}
        />
      </div>
    )
  }
}
