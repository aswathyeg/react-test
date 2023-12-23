import React, { useState } from 'react'
import Items from './Items'

const AddTodo=(props)=>{
    const[text,setText] = useState('')

    const handleText=(e)=>{
        setText(e.target.value)
              }

             
    return(
        <div>
            <input type='text'
            placeholder='Add todo'
            value={text}
            onChange={handleText}/>
            <button
             onClick={()=>{
                props.onAddTodo(text);
                setText('')
             }}>
                Add
                </button>
                <Items text={text}/>
        </div>
    )

}
export default AddTodo;