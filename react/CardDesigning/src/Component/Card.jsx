import React from 'react'
import { useState } from 'react'
const Card = (props) => {
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);
  const fun1 = () => {
    setHeight(height+50);
  }
  const fun2 = () => {
    setHeight(height-50);
  }
  const fun3 = () =>{
    setWidth(width+50);
  }
  const fun4 = () =>{
    setWidth(width-50);
  }
  return (
      <div id='card' style={{marginTop:"20px", border:"1px solid black", textAlign:"center"}}>
        <h4>Heading {props.title}</h4>
        <img src={props.image} alt="" height={height} width={width} />
        <h4>Price {props.price}</h4>
        <div style={{backgroundColor:"aliceblue", display:"flex", justifyContent:"space-evenly", padding:"10px"}}>
          <button onClick={fun1} >Col+</button>
          <button onClick={fun2} >Col-</button>
          <button onClick={fun3} >Row+</button>
          <button onClick={fun4} >Row-</button>
        </div>
      </div>
  )
}

export default Card
