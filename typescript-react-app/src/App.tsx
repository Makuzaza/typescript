import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

// function App() {
//   return (
// <div>Typescript - React</div>
//   )
// }

const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'Finish Typescript course' }]

  return <div className='App'>
    {/* A component that adds a todo */}
    <NewTodo />
    <TodoList items = {todos}/>
    Typescript - React</div>
}

export default App;
