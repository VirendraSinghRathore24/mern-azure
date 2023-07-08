import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"


const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ? (
        <div className="flex mt-2 max-w-5xl mx-auto">
          <div>
            {
              cart.map((item, index) => (
                 <CartItem key={item.id} item={item} itemIndex={index}/>
              ))
            }
          </div>

          <div className="flex flex-col px-10 py-10 justify-between">
            <div>
               <div className="font-semibold text-[25px]">Your Cart</div>
               <div className="font-semibold text-[36px] text-green-700">Summary</div>
               <p><span className="text-normal">Total Items : {cart.length}</span></p>
            </div>

            <div>
              <p className="font-semibold">Total Amount : ${totalAmount}</p>
              <div className="py-4">
              <button className="bg-green-700 text-white rounded-lg w-[400px] h-10 items-center">Checkout Now</button>
              </div>
            </div>
   
          </div>
        </div>) 

        : (<div className="items-center justify-center mx-auto w-full h-full">
            <h1>Your cart is empty!</h1>
            <div className="bg-green-700 text-white rounded-sm w-[100px] h-10 items-center text-center ">
            <Link  to="/"><button>Shop Now</button></Link>
            </div>
        </div>)
      }
    </div>
  )
};

export default Cart;
