import { useState } from "react";
import {v4 as uuid} from "uuid";
import ShoppingListForm from "./ShoppingListForm";

export default function ShoppingList(){
    const [itemList, updateList] = useState([{id: uuid(), product: "Yella", quantity: "78"}]);
    const addItem = (item) =>{
        updateList((currentItems)=>{
            return [...currentItems, {...item, id: uuid()}]
        })
        
    }
    return(
        <>
        <h1>Shopping List</h1>
        <div className="listCard">
        {itemList.map(product => (
                <div key={product.id} className="individualProduct">{product.product}.., quantity: {product.quantity}</div>
            ))}
        </div>
        <div className="formCard">
            <ShoppingListForm addItem={addItem}/>
        </div>
        </>
    )
}