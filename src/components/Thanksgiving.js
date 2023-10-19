import CardContainer from "./CardContainer"
import { useOutletContext } from "react-router-dom"





function Thanksgiving () {
 const {items} = useOutletContext()


 const thanks = items.filter((item) => {
    return(item.holiday.includes("Thanksgiving"))
 })



   return(
    <CardContainer items = {thanks}/>
   )




}
export default Thanksgiving