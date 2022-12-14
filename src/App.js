import React, { useState } from "react";
import Task from "./Task";
import './App.css'
function App() {
  const [items, setItems] = useState([])
  const [value, setValue] = useState('')
  const [count, setCount] = useState(0)
  let index = 0
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    if(value)
    {
      setItems([...items, {
        task: value,
        done: false
      }])
      document.getElementById('form').reset()
      setCount(count+1)
    }
    setValue('')
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <h3>Tasks left to be done: {count}</h3>
      <ul>
        <Task items = {items} setItems = {setItems} count = {count} setCount = {setCount} />
      </ul>
      <form id = 'form'>
        Task: <input type="text" onChange={handleChange} />
        <button type="submit" onClick={handleClick}>Add</button>
      </form>
    </div>

  );
}

export default App;
