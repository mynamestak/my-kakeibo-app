import React, { useState } from "react";

const Todo = () => {

    const [ items, setItems ] = useState([]);
    const [ textValue, setTextValue ] = useState('');
    const [ textEditValue, setTextEditValue ] = useState('');
    const [ isEditting, setIsEditting ] = useState(null);

    // Input Area
    const onSubmit = () => {
        const updated = [...items, textValue];
        setItems(updated);

        setTextValue('');
    };

    const onHandleChange = (e) => {
        setTextValue(e.target.value);
    };

    // Delete
    const onHandleDelete = (deleteIndex) => {
        const updated = items.filter((item, index) => index !== deleteIndex);
        setItems(updated)
    };

    // Edit
    const onHandleEdit = () => {
        const updated = items.map((item, index) => {
            if (index === (isEditting - 1)) {
                item = textEditValue;
            }
            return item;
        })
        console.log(updated);
        setItems(updated);
        setIsEditting(null);
        setTextEditValue('');
    };

    const onHandleEditChange = (e) => {
        setTextEditValue(e.target.value);
    };

    const toggleEdit = (value, index) => {
        setIsEditting(index + 1) //;
        setTextEditValue(value);
    };

    return (
        <div>
            <label>Enter Text</label>
            <input type="text" value={textValue} onChange={onHandleChange}/>
            <button onClick={onSubmit}>Add</button>
            <ul>
                {
                    items.map((item, index) => 
                    <li key={index}>
                        {item}
                        <button onClick={() => toggleEdit(item, index)}>Edit</button>
                        <button onClick={() => onHandleDelete(index)}>Delete</button>
                    </li>)
                }
            </ul>
            {
                isEditting &&
                <div>
                     <input value={textEditValue} onChange={onHandleEditChange}/>
                      <button onClick={onHandleEdit}>Complete Edit</button>
                </div>
            }
           
        </div>    
     )
};

export default Todo;