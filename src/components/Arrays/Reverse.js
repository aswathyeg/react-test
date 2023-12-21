import React, { useState } from 'react'
const initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Terracotta Army' },
  ];
  
const Reverse = () => {
    const [array,setArray]=useState(initialList)
    const handleClick =()=>{
        let newArray=[
            ...array// 
        ]
        setArray(newArray.reverse())
    }
  return (
    <div>{

        array.map(a=>
            <ul>
                <li key={a.id}>{a.title}</li>
            </ul>
            )
        }
        <button onClick={handleClick}>
            Reverse
        </button>
        
        </div>
  )
}

export default Reverse