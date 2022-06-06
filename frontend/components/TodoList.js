import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        TodoList
        {this.props.todos.map(item => <Todo item={item} key={item.id}/>)}
      </div>
    )
  }
}
