import React, { useState } from 'react'

const Color = () => {
    const [color,setColor] = useState("red");
    function colorChange(){
        setColor("green");
    }
  return (
    <div>
      <button onClick={colorChange} style={{ backgroundColor: color }}>{color}</button>
    </div>
  )
}
export default Color;

