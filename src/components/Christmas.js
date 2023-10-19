import CardContainer from "./CardContainer"
import { useOutletContext } from "react-router-dom"


function Christmas() {
    const {items} = useOutletContext()


    const xmas = items.filter((item) =>{
        return(item.holiday.includes("Christmas"))
    })




    return(
        <CardContainer items = {xmas}/>

    )
}

export default Christmas