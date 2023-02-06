import React from 'react'

export default class Todo extends React.Component {
  render() {
    return <div className='todo' onClick={this.props.toggleCompleted} id={this.props.item.id}>{this.props.item.name}{this.props.item.completed ? <span>{String.fromCharCode(0x2713)}</span>:<span></span>}</div>
  }
}
