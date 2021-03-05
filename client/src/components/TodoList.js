import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = (props) => {

    return(
        <div>
            {props.items.map(item => {
                return (
                    <TodoItem 
                    key={item._id}
                    id={item._id}
                    item={item.name}
                    deleteItem={props.deleteItem}/>
                )
            })}
        </div>
    )
}
