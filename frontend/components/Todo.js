import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.complete(this.props.item.id)}>
        <h4 style={this.props.item.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{this.props.item.name}</h4>
      </div>
    )
  }
}
