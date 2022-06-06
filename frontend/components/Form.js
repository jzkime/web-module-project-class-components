import React from 'react'

export default class Form extends React.Component {


  render() {
    return (
      <form onSubmit={this.props.submitHandler}>
          <input type='text' onChange={this.props.changeHandler} value={this.props.current}/>
          <input type='submit' />
      </form>
    )
  }
}
