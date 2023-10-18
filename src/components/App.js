import React, {useState,useEffect} from "react"
import CardContainer from "./CardContainer"
import Header from "./Header"


function App () {

  const [items, setItems] = useState([])
  
  
  const getItems = () => {
    fetch("http://localhost:3010/Items")
    .then(r => r.json())
    .then((itemsArray) => setItems(itemsArray))
  }

  useEffect(getItems, [])



  return (
    <div className = "app">
      <Header  />
      <CardContainer  items = {items}/>
      

    </div>

  )
}
export default App;
