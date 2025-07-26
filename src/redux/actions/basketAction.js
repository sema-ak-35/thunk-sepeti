import ACTION_TYPES from "./actionTypes";
import api from "../../api"



export const getBasket=()=>(dispatch)=>{
    dispatch({type:ACTION_TYPES.BASKET_LOADİNG});
  
    api.get("/cart")
    .then((res)=>dispatch({type:ACTION_TYPES.BASKET_SUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:ACTION_TYPES.BASKET_ERROR,payload:err.message}))


}


export const createItem=(product)=>(dispatch)=>{

const newItem={
    id:product.id,
    title:product.title,
    price:product.price,
    photo:product.photo,
    restaurantId:product.restaurantId,
    amount:1
}

api.post("/cart",newItem)
.then((res)=>dispatch({type:ACTION_TYPES.CREATE_ITEM,payload:res.data}))
.catch((err)=>console.log(err))


}

export const updateItem=(id,newAmount)=>(dispatch)=>{
    api.patch(`/cart/${id}`,{amount:newAmount})
    .then((res)=>dispatch({type:ACTION_TYPES.UPDATE_ITEM,payload:res.data}))
    .catch(()=>alert("bir sorun oluştu"))
}

export const removeItem= (id)=>(dispatch)=>{
    api.delete(`/cart/${id}`)
    .then(()=> dispatch({ type:ACTION_TYPES.REMOVE_ITEM,payload:id}))
    .catch(()=>alert("bir sorun oluştu"))
   
}