import React ,{useState}from "react";

function Form({onNewItem}) {
    const [name , setName] = useState("")
    const [image , setImage] = useState("")
    const [price ,Setprice] = useState(0)
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
     const newItem ={
        name:name ,
        image:image,
        price:price,
        holiday:holiday
     }

     fetch("http://localhost:3000",{
        method : 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.springify(newItem)
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
       Setprice(0)
     } )
     

    }

  return (
    <div  onSubmit={handleSubmit} className="new-item-form">
      <h2>New Item</h2>
      <form>
        <input type="text" name="name" placeholder="name" value={name} onChange={handleNameChange}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={handleImageChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={handlePriceChange} />
        <input type="text" name="holiday" placeholder="holiday" value={holiday} onChange={handleHolidayChange}/>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default Form
