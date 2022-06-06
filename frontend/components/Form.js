import React from 'react'

export default class Form extends React.Component {


  render() {
    return (
      <form onSubmit={this.props.submitHandler}>
          <input type='text' onChange={this.props.changeHandler} value={this.props.current}/>
          <input type='submit' />
          <input type='button' onClick={this.props.hide} value={this.props.hidden ? 'Show Completed' : 'Hide Completed'} /> 
      </form>
    )
  }
}
