import React, { useState } from 'react';

export const AddItem = (props) => {

    function handleChange(event) {
        const { value } = event.target;
        props.setnewItem((prevValue) => {
            return {
                ...prevValue,
                name: value
            }
        })
    }

    function addItem(event) {
        props.onAdd(props.newItem);
        props.setnewItem({
            name: '',
            id: Math.floor(Math.random() * 100)
        });
        event.preventDefault();
    }

    return(
        <form>
            <input value={props.newItem.name} onChange={handleChange}/>
            <button onClick={addItem}>Add Item</button>
        </form>
    )
}
