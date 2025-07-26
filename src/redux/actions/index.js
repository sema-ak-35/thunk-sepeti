
import api from "../../api"
import ACTION_TYPES from "./actionTypes"
 
//  böylede yazılır
//  const getRestaurants=()=>{
//     return ()=>{}
//  }

export const  getRestaurants=()=>(dispatch)=>{
 dispatch({type:ACTION_TYPES.REST_LOADİNG})

    api
    .get('/restaurants')
    .then((res)=>dispatch({type:ACTION_TYPES.REST_SUCCESS,payload:res.data}))
    .catch((err)=>dispatch({type:ACTION_TYPES.REST_ERROR,payload:err.message}))
 }