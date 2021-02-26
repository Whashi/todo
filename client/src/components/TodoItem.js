import React from 'react';

 export const TodoItem = (props) => {
     function handleClick() {
         props.deleteItem(props.id)
     }
     return(
         <div>
             <h3>{props.item}</h3><button onClick={handleClick}>Delete</button>
         </div>
     )
 }
 