import React from 'react'

export default class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: ''
    }
  }

  handleChange = evt => {
    this.setState({...this.state, inputText: evt.target.value})
  }
  handleSubmit = evt => {
    evt.preventDefault()
    this.props.addItem(this.state.inputText)
    this.setState({...this.state, inputText: ''})
  }

  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='New item...' onChange={e => this.handleChange(e)} value={this.state.inputText}></input>
        <button type='submit'>Add item</button>
        <div><button>Clear Completed</button></div>
        
        
      </form>
      </div>
  }
}
