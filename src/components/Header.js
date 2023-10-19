import React from "react"
import { NavLink } from "react-router-dom";


function Header () {
    return (
        <header id ="header">
            <h1 id= "title">
                HolidaysRUS
            </h1>
            <div id="Navlinks">
             <NavLink className="Navlink" to="/Thanksgiving">Thanksgiving Selection</NavLink>
             <NavLink className="Navlink" to="/Christmas">Christmas Selection</NavLink>
             <NavLink className="Navlink" to="/Halloween">Halloween Selection</NavLink>
             <NavLink className="Navlink" to="/">Home Page</NavLink>
            </div>
        </header>
        
    )
}
export default Header;











