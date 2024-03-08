import React, { useRef } from 'react'

const RefExample = () => {
  const ref=useRef(0);



  return (
    <div>
      <h1>
        Time passed:{}
      </h1>
      <button>start</button>
      <button>stop</button>
      </div>
  )
}

export default RefExample;