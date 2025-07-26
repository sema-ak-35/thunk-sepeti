import { BsBasket } from "react-icons/bs";
import { IoRestaurant } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header=()=>{
    const { data }=useSelector((store)=>store.restaurantReducer)
    const { basket }=useSelector((store)=>store.basketReducer)

   const totalAmount= basket?.reduce((total,item)=>total + item.amount, 0)

    return (
    <header className="shadow">
        <div className="container flex justify-between items-center ">
            <Link to="/" className="text-red-500 font-[900] text-2xl font-mono md:text-3xl">
            Thunk Sepeti
            </Link>

            <div className="flex gap-5">
                <Link to="/" className="flex items-center gap-1 hover:underline">Yakınınızda {data?.length}  <IoRestaurant className="text-red-500"/><span className="max-md:hidden">restoran var</span></Link>

                <Link to="/cart" className="px-3 py-2 hover:bg-red-100 transiiton flex items-center rounded-full gap-2">
                <BsBasket/>
                <span>{totalAmount}</span>
                </Link>
            </div>
        </div>
    </header>
    )
}
export default Header;