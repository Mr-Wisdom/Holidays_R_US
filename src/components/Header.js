import React from "react"
import { NavLink } from "react-router-dom";


function Header () {
    return (
        <header>
            <h1 id= "title">
                HolidaysRUS
            </h1>
            <NavLink to="/Thanksgiving">Thanksgiving Selection</NavLink>
            <NavLink to="/Christmas">Christmas Selection</NavLink>
            <NavLink to="/Halloween">Halloween Selection</NavLink>
            <NavLink to="/">Home Page</NavLink>
        </header>
        
    )
}
export default Header;