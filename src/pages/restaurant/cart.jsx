import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createItem, updateItem } from "../../redux/actions/basketAction";



const Card=({product})=>{
    const dispatch=useDispatch()
    
   const {basket}= useSelector(store=>store.basketReducer)
  const basketItem= basket.find((item)=>item.id===product.id)

  const handleAdd=()=>{
   basketItem ? dispatch(updateItem(basketItem.id,basketItem.amount+ 1)) : dispatch(createItem(product))
  }
    return (
        <div className="grid grid-cols-[1fr_115px] gap-3 border shadow p-3 rounded-lg hover:bg-red-100 hover:scale-[1.02] cursor-pointer transition duration-300">
            <div className="flex flex-col justify-between">
                <div>
                    <h1 className="text-lg font-semibold">{product.title}</h1>
                    <p className="text-gray-500 my-1">{product.desc}</p>
                </div>
                <p className="text-lg font-semibold">{product.price} ₺</p>
            </div>
            <div className="relative">
                <img src={product.photo} alt={product.name} className="rounded-md object-cover size-full" />
                <button onClick={handleAdd} className="absolute end-2 bottom-2 bg-white rounded-full size-8 grid place-items-center font-bold hover:bg-red-100"> {basketItem ? basketItem.amount :<FaPlus/>}</button>
            </div>
        </div>
    )
}
export default Card;