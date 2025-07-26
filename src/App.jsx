import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Restaurant from "./pages/restaurant";
import Header from "./components/header";
import Footer from "./components/footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRestaurants } from "./redux/actions";
import { getBasket } from "./redux/actions/basketAction";

const App=()=>{

const dispatch =useDispatch();

useEffect(()=>{
  dispatch(getRestaurants())

  dispatch (getBasket())
},[])



  return (
  <BrowserRouter>
  <div className="min-h-screen flex flex-col">
    <Header/>
  <main className="flex-1 h-full">
  <Routes>
    <Route  path="/"  element={<Home/>}/>
    <Route  path="/restaurant/:id" element={<Restaurant />}/>
    <Route  path="/cart" element={<Cart />}/>
  </Routes>
</main>
<Footer/>
 </div>
  </BrowserRouter>
  )
}

export default App;
