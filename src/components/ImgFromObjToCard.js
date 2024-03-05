import React from 'react'
import orange from './assets/orange.jpg'
import white from './assets/white.jpg'
// import "./Card.css";

const ImgFromObjToCard = () => {
    const shuffleArray=(array)=>{
        // Using the Fisher-Yates (Knuth) shuffle algorithm
      for(let i= array.length-1; i>0;i--){
          const j=Math.floor(Math.random()*(i+1));
          [array[i],array[j]]=[array[j],array[i]];
      }
      return array;
    }
    const DATA=[
        {
        id:1,name:"first",imageUrl:orange
    
    },
    {
        id:2,name:"second",
        // imageUrl:'https://images.unsplash.com/photo-1530092285049-1c42085fd395?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        imageUrl:white
    }
    
    ]
    const shuffleData= shuffleArray([...DATA])
   

  return (
    <div>
{shuffleData.map((item)=>(
    
        <div key={item.id} className="card">
             <div className="card-body">
          <img src={item.imageUrl} alt={item.name}  className='card-image'
             style={{ height: '200px', objectFit: 'cover' }}/>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            {/* Add more card details as needed */}
          </div>
</div>
        </div>
))}

    </div>
  )
}

export default ImgFromObjToCard