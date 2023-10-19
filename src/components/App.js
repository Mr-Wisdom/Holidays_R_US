import React, {useState,useEffect} from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import Form from "./Form"


function App () {

  const [items, setItems] = useState([])
  
  
  const getItems = () => {
    fetch("http://localhost:3010/Items")
    .then(r => r.json())
    .then((itemsArray) => setItems(itemsArray))
  }

  useEffect(getItems, [])

  function onNewItem(newItem) {
setItems((currentItems) => [...currentItems,newItem])
  }



 const context = {
  items,

 }


  return (
    <div className = "app">
      <Header  />
      <Form onNewItem={onNewItem}/>
      <Outlet context={context} />
    </div>

  )
}
export default App;
