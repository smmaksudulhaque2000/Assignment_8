import { useEffect, useState } from "react";
import { deleteCartList, getCartList } from "../Utils";
import DashCart from "../DashCart/DashCart";
import { GiSettingsKnobs } from "react-icons/gi";
import mark from "../../assets/Group.png";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const CartList = () => {
    const [cart, setCart] = useState([]);
    const [purchaseSuccess, setPurchaseSuccess] = useState(false);
    const [previousTotalCost, setPreviousTotalCost] = useState(0);

    useEffect(() => {
        const cartList = getCartList();
        setCart(cartList);
    }, []);

    const handleRemoved = (id) => {
        deleteCartList(id);
        const cartList = getCartList();
        setCart(cartList);
    };

    const handleSortByPrice = () => {
        const sortedCart = [...cart].sort((a, b) => b.price - a.price);
        setCart(sortedCart);
    };

    const totalCost = cart.reduce((total, item) => total + item.price, 0);

    const handlePurchase = () => {
        cart.forEach(item => deleteCartList(item.id));
        setPreviousTotalCost(totalCost);
        setCart([]);
        setPurchaseSuccess(true);
    };

    useEffect(() => {
        if (purchaseSuccess) {
            const timer = setTimeout(() => {
                setPurchaseSuccess(false);
            }, 99999);
            return () => clearTimeout(timer);
        }
    }, [purchaseSuccess]);

    return (
        <div className="w-3/4 mx-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cart | Gadget Heaven</title>
                <link rel="canonical" href="http://localhost:5173/dashboard/cartlist" />
            </Helmet>

            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Cart</h3>
                <div className="flex flex-col lg:flex-row items-center gap-5">
                    <h3 className="text-xl font-bold">Total Cost: {totalCost.toFixed(2)}</h3>
                    <div className="flex flex-col lg:flex-row gap-2">
                        <button 
                            onClick={handleSortByPrice} 
                            className="bg-transparent border border-purple-700 text-purple-700 p-2 rounded-full font-bold px-3 flex items-center gap-2"
                        >
                            Sort by price 
                            <GiSettingsKnobs className="text-2xl" />
                        </button>
                        <button 
                            onClick={handlePurchase} 
                            className="bg-purple-700 text-white p-2 rounded-full px-3"
                        >
                            Purchase
                        </button>
                    </div>
                </div>
            </div>

            <div>
                {cart.map(cartItem => (
                    <DashCart 
                        handleRemoved={handleRemoved} 
                        product={cartItem} 
                        key={cartItem.id} 
                    />
                ))}
            </div>

            {purchaseSuccess && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-3/4 lg:w-1/4 bg-white p-5 rounded-lg text-center flex flex-col items-center justify-center gap-5">
                        <img src={mark} alt="Mark" />
                        <h3 className="text-2xl font-bold text-purple-700">Payment Successfully</h3>
                        <hr className="border border-gray-500 w-full my-2" />
                        <p className="text-gray-500">Thanks for Purchasing.</p>
                        <p className="font-bold text-xl">Total :  ${previousTotalCost}</p>
                        <Link className="p-3 font-bold rounded w-3/4 bg-gray-300" to={"/"}>Close</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartList;
