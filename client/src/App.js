import React, { useState } from 'react';
import { AddItem } from './components/AddItem';
import { TodoList } from './components/TodoList';

function App() {

  const todoList = [
    {name: "Learn Redux", id: 1},
    {name: "Play with baby", id: 2},
    {name: "Do dishes", id: 3}]

    const [todoItems, setTodoItems] = useState(todoList);

  function addItems(newItem) {
    setTodoItems(prevItems => {
      return [...prevItems, newItem]
    });
  }

  function deleteTodoItem(id) {
    setTodoItems(prevItems => {
        return prevItems.filter(prevItem =>{
            return prevItem.id !== id;
        });
    });
}

  return (
    <div className="App">
    <TodoList items={todoItems} deleteItem={deleteTodoItem}/>
    <AddItem onAdd={addItems}/>
    </div>
  );
}

export default App;
