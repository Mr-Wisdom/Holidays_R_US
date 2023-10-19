import React, {useState,useEffect} from "react"
import CardContainer from "./CardContainer"
import Header from "./Header"
import { Outlet } from "react-router-dom"


function App () {

  const [items, setItems] = useState([])
  
  
  const getItems = () => {
    fetch("http://localhost:3010/Items")
    .then(r => r.json())
    .then((itemsArray) => setItems(itemsArray))
  }

  useEffect(getItems, [])



 const context = {
  items,

 }


  return (
    <div className = "app">
      <Header  />
      {/* <CardContainer  items = {items}/> */}
      
      <Outlet context={context} />
    </div>

  )
}
export default App;
