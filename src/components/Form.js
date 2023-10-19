import React ,{useState}from "react";

function Form({onNewItem}) {
    const [name , setName] = useState("")
    const [image , setImage] = useState("")
    const [price ,Setprice] = useState("")
    const [holiday,setHoliday] = useState("")

    function handleHolidayChange(event){
        setHoliday(event.target.value)
    }

    function handleNameChange(event){
        setName(event.target.value)   
    }

    function handleImageChange(event){
        setImage(event.target.value)


    }
    function handlePriceChange(event){
        Setprice(event.target.value)
    }
    function handleSubmit(event){
     event.preventDefault()
     const firstletterHoliday = holiday.charAt(0)
     const upperCaseFirst = firstletterHoliday.toUpperCase()
     const restOfWord = holiday.substring(1).toLowerCase()
     const newItem ={
        name:name ,
        image:image,
        price:price,
        holiday:upperCaseFirst+restOfWord
     }

     fetch("http://localhost:3010/Items",{
        method : 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(newItem)
     })
     .then((resp)=>{
        if(resp.ok){
           return resp.json()
        }
     })
     .then((data) => {
        onNewItem(data)
       setName("")
       setImage("")
       Setprice("")
     } )
     

    }

  return (
    <div  onSubmit={handleSubmit} className="new-item-form">
      <h2>Submit a New Item!</h2>
      <form>
        <input type="text" name="name" placeholder="Item Name" value={name} onChange={handleNameChange}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={handleImageChange} />
        <input type="number" name="price" placeholder="Price" value={price} onChange={handlePriceChange} />
        <input type="text" name="holiday" placeholder="holiday (Christmas, Halloween, or Thanksgiving?)" value={holiday} onChange={handleHolidayChange}/>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default Form
