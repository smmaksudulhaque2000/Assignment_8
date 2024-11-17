import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import { addCartList, addWishList } from "../Utils";
import { Helmet } from 'react-helmet';

const Details = () => {
    const fakeData = useLoaderData(); 
    const {id} = useParams()
    const [details, setDetails] = useState({})
    
    useEffect(() => {
        const singleDetails = fakeData.find(details => details.id === parseInt(id))
        setDetails(singleDetails)
        
    } ,[])

    const{name, image, price, stockStatus, description, processor, battery, weight, storage, rating} = details;

    const handleCartList = (details) => {
        addCartList(details)
    }
    const handleWishList = (details) => {
        addWishList(details)
    }
    
    return (
        <div>
                <Helmet>
                <meta charSet="utf-8" />
                <title>Details | Gadget Heaven</title>
                <link rel="canonical" href="http://localhost:5173/details" />
                </Helmet>
            <div className="px-2">
            <div className="bg-purple-700 rounded-xl p-10 flex flex-col justify-center items-center gap-10 h-96">
            <div>
            <h3 className="text-center font-bold text-5xl text-white">Product Details</h3>
            <p className="text-center  text-xl w-3/4 mx-auto py-10 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            </div>
                <div className="flex flex-col lg:flex-row gap-10 p-5 w-3/4 mx-auto rounded-xl mt-[-100px] bg-white shadow-xl">
                    <div className="w-full lg:w-2/4">
                        <img src={image} alt={name} className="rounded-xl w-full h-full" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold">{name}</h3>
                        <p className="font-bold text-gray-600">Price: ${price} </p>
                        <p className="w-28 text-sm text-green-500 border-2 border-green-600 rounded-full text-center p-1 font-bold">{stockStatus}</p>
                        <p className="text-gray-400 text-xs">{description}</p>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold">Specification:</h3>
                                <li className="pl-3 text-sm text-gray-600">{storage}</li>
                                <li className="pl-3 text-sm text-gray-600">{processor}</li>
                                <li className="pl-3 text-sm text-gray-600">{weight}</li>
                                <li className="pl-3 text-sm text-gray-600">{battery}</li>
                            <div className="flex gap-2 items-center">
                                <h3 className="font-bold">Rating</h3>
                                <div className="p-1 bg-gray-300 w-11 text-center rounded-full text-sm text-purple-500 font-bold">
                                {rating}
                                </div>
                            </div>

                            <div className="py-2">
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button onClick={()=>handleCartList(details)} className="flex items-center text-white gap-2 bg-purple-700 py-2 px-4 rounded-full">Add To Card <IoMdCart /></button>
                                <button onClick={()=>handleWishList(details)} className="p-2 border rounded-full text-2xl"><GiSelfLove /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Details;