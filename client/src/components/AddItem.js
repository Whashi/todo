import React, { useState } from 'react';

export const AddItem = (props) => {

    const [newItem, setnewItem] = useState({
        name: '',
        id: Math.floor(Math.random() * 100)
    });

    function handleChange(event) {
        const { value } = event.target;
        setnewItem((prevValue) => {
            return {
                ...prevValue,
                name: value
            }
        })
    }

    function addItem(event) {
        props.onAdd(newItem);
        setnewItem({
            name: '',
            id: Math.floor(Math.random() * 100)
        });
        event.preventDefault();
    }

    return(
        <form>
            <input value={newItem.name} onChange={handleChange}/>
            <button onClick={addItem}>Add Item</button>
        </form>
    )
}
