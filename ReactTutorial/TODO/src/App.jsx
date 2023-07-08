import {v4} from "uuid"
import { useState } from 'react'
import './App.css'
import Input from './components/Input/Input'
import TodoList from './components/TodoList/TodoList'

function App() {

 const [text, setText] = useState("");
 const [todos, setTodos] = useState([])

const handleOnTextChange = (e) =>{
  setText(e.target.value)
}
const handleAddTodo = () => {
  if (text !==""){
    const newTodo = {
      id:v4(),
      title:text,
      isComplete: false
    }
    setTodos((prevTodos)=> [...prevTodos, newTodo])
    setText("")
  }
  const handleDeleteTodo= (id) =>{
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
}

  return (
    <>
      <Input text={text} onTextChange={handleOnTextChange} addTodo={handleAddTodo} />
      <TodoList todos={todos} deleteTodo={handleDeleteTodo}/>
    </>
  )
}

export default App