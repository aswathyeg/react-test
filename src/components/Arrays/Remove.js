import React, { useState } from 'react'

const Remove = () => {
    const team= [
        { id: 0, name: 'Marta Colvin Andrade' },
        { id: 1, name: 'Lamidi Olonade Fakeye'},
        { id: 2, name: 'Louise Nevelson'},
      ];
      const [members,setMembers]=useState(team);

      
  return (
    <div>
        {members.map((teams)=>(
            <ul>
                <li key={teams.id}>{teams.name}
                <button onClick={()=>{ setMembers(
            members.filter(member=>
             
            member.id!==teams.id
            ))}}>Remove</button></li>
              
            </ul>
        )
        
        )}
        {/* <ul>
            <l1><button>Remove</button></l1>
            <l1><button>Remove</button></l1>
            <l1><button>Remove</button></l1>
</ul> */}
    </div>
  )
}

export default Remove