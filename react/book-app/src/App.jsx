// import React from 'react'
// import Book from './Component/Book'
// import "./App.css";
// const App = () => {
//   return (
//     <div id="container">
//       <Book/>
//       <Book/>
//       <Book/>
//     </div>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react'
import Fashion from './Component/Fashion';

const App = () => {
  const [fa1,setFa1] = useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      setFa1(data);
    })
  },[])
  return (
    <div>
      {
        fa1.map((f,id)=>(
          <Fashion key={id} props={f}/>
        ))
      }
    </div>
  )
}

export default App
