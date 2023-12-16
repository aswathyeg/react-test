import React from 'react'
import { useImmer } from 'use-immer';
const ImmerExample = () => {
    const [person,updatePerson]=useImmer({
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    })

   const handleNameChanage=(e)=>{
    updatePerson(draft=>{
        draft.name=e.target.value
    })
    

   }
   const handleTitleChanage=(e)=>{
    updatePerson(draft=>{
        draft.artwork.title=e.target.value;
    })
}
  return (
    <div>
        <label>Name:</label>
<input type="text"
value={person.name}
onChange={handleNameChanage}/>
<label>Title:</label>
<input type="text"
value={person.artwork.title}
onChange={handleTitleChanage}/>

    </div>
  )
}

export default ImmerExample