import Cards from "./Cards"
import React from "react"
import { useOutletContext } from "react-router-dom"


function CardContainer ({items}) {

    // const {items} = useOutletContext()






    const renderCards = items.map(({ Id , name , price , holiday , image }) => 
    (
    <Cards
    key = {Id}
    name = {name}
    image = {image}
    holiday = {holiday}
    price = {price}
    />))
    return (
    <ul className="items">{renderCards}</ul>
    )
}
export default CardContainer;