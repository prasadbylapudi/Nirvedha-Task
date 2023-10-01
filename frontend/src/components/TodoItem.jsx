import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import { deleteTodo, editTodo } from "../features/todos/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Dispatch the editTodo action with the updated data
    dispatch(editTodo({ id: todo._id, todoData: { text: updatedText } }));
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedText(todo.text); // Reset the updated text
  };

  return (
    <div className="todo">
      <div>{new Date(todo.createdAt).toLocaleString("en-US")}</div>
      {isEditing ? (
        <div className="edit-todo">
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            className="edit-input"
          />
          <div className="edit-buttons">
            <button onClick={handleSaveClick} className="edit-button">
              Save
            </button>
            <button onClick={handleCancelClick} className="edit-button">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="todo-text">{todo.text}</h2>
          <button onClick={handleEditClick} className="edit">
            <FaEdit />
          </button>
          <br></br>
        </>
      )}
      <button onClick={() => dispatch(deleteTodo(todo._id))} className="close">
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default TodoItem;
