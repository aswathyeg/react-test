import React, { useState } from 'react'

const Replace = () => {
    const initialArray=[0,0,0]
    const [counter,setCounter]=useState(initialArray)

    const handleClick=(index)=>{
        const nextCounters= counter.map((c,i)=>{
            if(i===index){
                  // Increment the clicked counter
                return c+1
            }
             // The rest haven't changed
            else return c
        }
        )
        setCounter(nextCounters)

    }
  return (
    <ul>{
        counter.map((c,i)=>
            
                <li key={i}>{c}
           
            <button onClick={()=>{handleClick(i)}}>+1</button>
            </li>
            
        )
        }
        </ul>
  )
}

export default Replace