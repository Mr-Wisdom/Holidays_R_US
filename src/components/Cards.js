import React from "react"

function Cards ({name,price,holiday,image}) {
    return(
        <li className = "card">
            <img src={image} alt = {name} className="card-image"/>
            <h3 className="card-title">{name}</h3>
            <p className="card-price">${price}</p>
            <span className = "holiday">{holiday}</span>
        </li>
    )
}
export default Cards;