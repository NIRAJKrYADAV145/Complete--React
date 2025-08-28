import { useRef } from 'react';
import { BiMessageAdd } from "react-icons/bi";

function Addtodo({ onNewItem }) {
  const todoNameElement = useRef("");
  const dueDateElement = useRef("");


  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };
  return (
    <div className="container text-center">
      <form className="row kg-row"
        onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input type="text"
          ref={todoNameElement}
            placeholder="Enter To-Do Here."
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit"
            className="btn btn-success kg-buton"  >
            <BiMessageAdd /> </button>
        </div>

      </form>

    </div >


  );
}
export default Addtodo;