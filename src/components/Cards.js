import React from 'react';
import '../styles/cards.css'

const Cards = ({item, handleClick}) => {
    const {title, Price, img} = item;
    return (
       <div className="cards">
        <div className="image_box">
            <img src={img} alt=""/>
        </div>
        <div className="details">
            <p>{title}</p>
            <p> Price - {Price}$</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
       </div>
    );
}
export default Cards