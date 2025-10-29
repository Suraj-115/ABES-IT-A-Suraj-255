import React from "react";
import './Card.css';
function Card(props){
    return (
        <div id="sa">
            <img src="https://www.shutterstock.com/image-vector/vector-cute-baby-panda-cartoon-600nw-2427356853.jpg" alt="" />
            <h1>{props.name} </h1>
            <h3>{props.age}</h3>
        </div>
    )
}
export default Card;