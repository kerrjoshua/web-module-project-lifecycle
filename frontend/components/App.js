import React from 'react'
import TodoList from'./TodoList'
import Form from './Form'
import axios from 'axios';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
constructor(){
  super();
  this.state = {
    todos: [],

  }



}
componentDidMount(){
  axios.get(URL)
    .then(res => {
      this.setState({...this.state, todos: res.data.data})
    })
    .catch(err => console.error('axios catch', err))
}

toggleCompleted = evt => {
  axios
    .patch(URL+"/"+evt.target.id)
    .then(() => this.setState({...this.state, todos: this.state.todos.map(item =>{
      if (item.id === evt.target.id) item.completed = !item.completed;
      return item;
    })}))
    .catch(err => console.error(err))
  

}

  render() {
    
    return <><h2>To Do:</h2>
    <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
    <Form />
    </>
  }
}
