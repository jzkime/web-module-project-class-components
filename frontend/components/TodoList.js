import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(item => <Todo item={item} key={item.id} complete={this.props.complete}/>)}
      </div>
    )
  }
}
