import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import React from 'react';

const defaultTodo = [
  { text: "Ya te lo sabes" , completed: true},
  { text: "Curso React" , completed: true},
  { text: "YLLASDAS" , completed: true},
  { text: "YASA sabes" , completed: true},

]

function App() {
  return (
  //  React.Fragment es igual a <>
  <>

    <TodoCounter completed={16} total={25}/>
    <TodoSearch />
    
    <TodoList>
      {defaultTodo.map(todo => (
        <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
        />)
      )}
      
    </TodoList>

    <TodoButton/>

  </>
  );
}

export default App;
