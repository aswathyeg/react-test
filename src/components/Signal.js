import React, { useState } from 'react'

const Signal = () => {
    const [isWalk,setIsWalk]=useState('true')
   

    const handleWalk=()=>{
        setIsWalk(!isWalk)
    }
   


  return (
    <div>
        
       
        <button onClick={handleWalk}>
        {isWalk?  'Change to stop':'Change to walk'}
        </button> 
        {isWalk?(<p style={{color:'green'}}>Walk</p>):(<p style={{color:'red'}}>Stop</p>)}
        
       
       
       
       
      
       
        </div>
        
  )
}

export default Signal