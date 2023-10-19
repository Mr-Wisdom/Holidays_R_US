import CardContainer from "./CardContainer"
import { useOutletContext } from "react-router-dom"


function Homepg () {
    const {items} = useOutletContext()
    
    
    return(
        <div className="homePage">
            <h2>Welcome to HolidaysRUS</h2>
            <CardContainer items = {items}/>
        </div>

    )


}
export default Homepg