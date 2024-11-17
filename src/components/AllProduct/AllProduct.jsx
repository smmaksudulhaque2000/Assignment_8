import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Card from "../Card/Card";
import { MdExpandMore } from "react-icons/md";

const AllProduct = () => {
    const fakeData = useLoaderData();
    const [visibleProducts, setVisibleProducts] = useState(6);

    const showMoreProducts = () => {
        setVisibleProducts(show => show + 6);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {fakeData.slice(0, visibleProducts).map(product => (
                <Card key={product.id} product={product} />
            ))}
            {visibleProducts < fakeData.length && (
                <button 
                    onClick={showMoreProducts} 
                    className="col-span-full bg-purple-700 text-white py-2 font-bold px-4 rounded flex justify-center items-center"
                >
                    Show More
                    <MdExpandMore className="text-2xl" />
                </button>
            )}
        </div>
    );
};

export default AllProduct;
