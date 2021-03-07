import React from 'react';
import Add from '@material-ui/icons/Add';

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
        <form className="add-item-container">
            <input className="add-item" value={props.newItem.name} onChange={handleChange}/>
            <button className="input-button" onClick={addItem}>
                <Add />
            </button>
        </form>
    )
}
