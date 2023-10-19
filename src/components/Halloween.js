import CardContainer from "./CardContainer"
import { useOutletContext } from "react-router-dom"





function Halloween () {
    const {items} = useOutletContext()



    const hallow = items.filter((item) => {
        return(item.holiday.includes("Halloween"))
    })

    return(
        <CardContainer items = {hallow}/>

    )
}

export default Halloween