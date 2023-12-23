import React,{useState} from 'react'
const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
  ];
const ObjectsInArray = () => {
   
      const [myList,setMyList] =useState(initialList)
      const [yourList,setYourList] =useState(initialList)
    const MyList =()=>{
        return(
            <div>
                <h2>
                My list of art to see:
                </h2>
<ul>
    {myList.map(mlist=><li>
        <input type='checkbox'
        checked={mlist.seen}
        >
            </input>
            {mlist.title}
            </li>)}
    <li></li>
</ul>
            </div>
        )

    }
    const YourList=()=>{
        return(
            <div>
                <h2>
                Your list of art to see:
                </h2>
                <ul>
    {myList.map(mlist=><li>
        <input type='checkbox'
        checked={mlist.seen}
        >
            </input>
            {mlist.title}
            </li>)}
    <li></li>
</ul>
            </div>
        )
    }
  return (
    <div><h1>
        Art Bucket List
        </h1>
        <MyList/>
        <YourList/>
    </div>
  )
}

export default ObjectsInArray