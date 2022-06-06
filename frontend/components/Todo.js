import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.item.name}</h4>
      </div>
    )
  }
}
