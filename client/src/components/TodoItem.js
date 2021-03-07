import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

 export const TodoItem = (props) => {
     function handleClick() {
         props.deleteItem(props.id)
         alert("Are you sure you want to delete this item?")
     }
     return(
         <div className="container">
            <div className="todo-item">
                <h3 className="item-text">{props.item}</h3>
            </div>
            <button className="delete-button" onClick={handleClick}>
                <DeleteForeverIcon />
            </button>
         </div>
         
     )
 }
 