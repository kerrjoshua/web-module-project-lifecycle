import React from 'react'
import TodoList from'./TodoList'
import Form from './Form'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  render() {
    return <>Hello
    <TodoList />
    <Form />
    </>
  }
}
