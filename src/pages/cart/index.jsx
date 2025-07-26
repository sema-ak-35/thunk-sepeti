import { useSelector } from "react-redux";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "./card";
import OrderBox from "./order-box";

const Cart=()=>{
    const {isLoading,error,basket}=useSelector((store)=>store.basketReducer)

    
    return (
    <div className="container">
        <h1 className="text-2xl font-bold mb-5">SEPET</h1>

        <div className="grid md:grid-cols-[1fr_300px] gap-4">
            <div>
                {isLoading ? ( <Loader/> ) : error ? (<Error/>) : basket.length === 0 ? (<div>bulunamadı</div>) : (basket?.map((item)=>(
                   <Card key={item.id} product={item}/>
                )))
               
                }
            </div>

            <OrderBox basket={basket}/>
        </div>
        </div>
)
}
export default Cart;