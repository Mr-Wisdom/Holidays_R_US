import React from "react"

function Cards ({name,price,holiday,image}) {
    return(
        <li className = "card">
            <img src={image} alt = {name}/>
            <h3>{name}</h3>
            <p>${price}</p>
            <span id = "holiday">{holiday}</span>
        </li>
    )
}
export default Cards;