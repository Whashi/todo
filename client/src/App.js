import React, { useState, useEffect } from 'react';
import { AddItem } from './components/AddItem';
import { TodoList } from './components/TodoList';
import axios from 'axios';

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const [newItem, setnewItem] = useState({
    name: ''
});

  useEffect(() => {
    getTodoItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTodoItems = async () => {
    const response = await axios.get('/api/v1/todolist/').catch((err) => console.log('Error:', err));
    if(response && response.data) setTodoItems(response.data.data);
  }

  const addItems = async () => {
    await axios.post('/api/v1/todolist/', newItem).catch((err) => console.log('Error:', err));
    getTodoItems()

  }

  const deleteTodoItem = async (id) => {
    await axios.delete(`/api/v1/todolist/${id}`).catch((err) => console.log('Error:', err));
    getTodoItems();
  }

  return (
    <div className="App">
    <TodoList items={todoItems} deleteItem={deleteTodoItem}/>
    <AddItem newItem={newItem} setnewItem={setnewItem} onAdd={addItems}/>
    </div>
  );
}

export default App;
