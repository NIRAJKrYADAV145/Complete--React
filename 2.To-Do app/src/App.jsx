import AppName from "./Components/AppName";
import Addtodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
function App() {


  const [todoItems, setTodoItems] = useState([]);
  
  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [...currValue,{name: itemName, dueDate: itemDueDate},
          ]);
  };



  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);

  };



  return (<center className="todo-container">
    <AppName />
    <Addtodo onNewItem={handleNewItem} />
    {todoItems.length === 0 && <WelcomeMessage ></WelcomeMessage>}
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />

  </center>
  );
}
export default App;
