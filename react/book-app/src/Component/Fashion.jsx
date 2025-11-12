import React from 'react';
import './Fashion.css';
const Fashion = ({props}) => {
  return (
    <div>
      
      <div id='card' style={{marginTop:"20px"}}>
        <img src={props.image} alt="" height={150} width={150} />
        <h4>Title {props.title}</h4>
        <h4>Price {props.price}</h4>
      </div>
    </div>
  );
};

export default Fashion;