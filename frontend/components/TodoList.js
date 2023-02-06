import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return <div id='todos'>
    {this.props.todos.map((item) => <Todo key={item.id} item={item} toggleCompleted={this.props.toggleCompleted}/>)}
    </div>
  }
}
