import React, { useState } from 'react'
let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];
const Insertion = () => {
    
    const [array,setArray]=useState(initialArtists)
    const[name,setName]=useState('')
    const handleClick=()=>{
        const sliceAt=1;//could be any position
      let newArray=[
              // Items before the insertion point:
        ...array.slice(0,sliceAt),
            // New item:
        {id:nextId++,name:name},
        // Items after the insertion point:
       ... array.slice(sliceAt)
      ]
        setArray(newArray)
        setName('')

    }
  return (
    <div>
<input type='text'
value={name}
onChange={(e)=>setName(e.target.value)}/>
<button onClick={handleClick}>Insert</button>
<ul>
    {array.map(a=>
    <li>{a.name}</li>
        )}
</ul>

    </div>
  )
}

export default Insertion