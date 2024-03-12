import { useState } from "react";
import { v4 as uuid } from "uuid";

function ShoppingListForm({addItem}){
    const [itemData, setItemData] = useState({product: "", quantity: ""});
    
    const handleChange = (evt) =>{
        console.log(evt.target.value)
        setItemData(prevItem => {
            return {...prevItem, [evt.target.name]: evt.target.value};
        })
    }

    const handleSubmit=(evt)=>{
        
        addItem(itemData);
        setItemData({product: "", quantity: ""});
        evt.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="itemName">Enter your Item:</label>
            <input name="product" type="text" className="inputCont itemName" id="itemName" placeholder="Item.." onChange = {handleChange} value={itemData.product}/>
            <label htmlFor="itemQuantity">Enter the quantity</label>
            <input name="quantity" type="text" className="inputCont itemQuantity" id="itemQuantity" placeholder="Quantity.." onChange = {handleChange} value={itemData.quantity}/>
            <button>Submit</button>
        </form>
    )
}

export default ShoppingListForm;