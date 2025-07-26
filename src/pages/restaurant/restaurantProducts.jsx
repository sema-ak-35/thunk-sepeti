import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
import Error from "../../components/error";
import api from "../../api";
import { FaFire } from "react-icons/fa";
import Card from "../restaurant/cart"

const RestaurantProducts=()=>{

    const {id}=useParams()

    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)
    const [products,setProducts]=useState(null)

    if(isLoading) return <Loader/>
    if(error) return <Error info={error}/>

     useEffect(()=>{
        api.get(`products?restaurantId=${id}`)
        .then((res)=>setProducts(res.data))
        .catch((err)=>setError(err.message))
        .finally(()=>setIsLoading(false))
    },[])

    return (
    <div className="h-full ">
        <h2 className="text-2xl font-bold flex itrms-center gap-2">
            <FaFire className="text-red-500"/>
            Popüler
            </h2>
            <p className="text-gray-600">Restoranın en çok tercih edilen ürünleri</p>

            <div className="grid lg:grid-col-2 gap-5 mt-5 min-h-[400]">
                {products?.map((item,i)=><Card key={i} product={item}/>)}
            </div>
        </div>)
}
export default RestaurantProducts;