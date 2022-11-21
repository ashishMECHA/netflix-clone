import React from "react";
import './Card.css';

const Card=(props)=>{
    const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;
    return <div><img className="card-poster" src={imageUrl} alt="poster"/></div>
}
export default Card;