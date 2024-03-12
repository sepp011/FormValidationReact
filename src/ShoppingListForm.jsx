import { useState } from "react";
import { v4 as uuid } from "uuid";

function ShoppingListForm({addItem}){
    const [itemData, setItemData] = useState({product: "", quantity: ""});
    const [productIsValid, setProductIsValid] = useState(false); // to verify if product input field is not empty
    
    const validateProduct = (e) =>{
        if(e.length !== 0){
           return setProductIsValid(true)
        }
        return setProductIsValid(false);
    }

    const handleChange = (evt) =>{
        if(evt.target.name === "product"){
        validateProduct(evt.target.value);
        }
        console.log(evt.target.value)
        setItemData(prevItem => {
            return {...prevItem, [evt.target.name]: evt.target.value};
        })
    }

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        if(productIsValid){
        addItem(itemData);
        setItemData({product: "", quantity: ""});
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="itemName">Enter your Item:</label>
            <input name="product" type="text" className="inputCont itemName" id="itemName" placeholder="Item.." onChange = {handleChange} value={itemData.product}/>
            {!productIsValid? <span style={{color: 'red'}}>Product cannot be empty</span>: null}
            <label htmlFor="itemQuantity">Enter the quantity</label>
            <input name="quantity" type="text" className="inputCont itemQuantity" id="itemQuantity" placeholder="Quantity.." onChange = {handleChange} value={itemData.quantity}/>
            <button disabled={!productIsValid}>Submit</button>
        </form>
    )
}

export default ShoppingListForm;