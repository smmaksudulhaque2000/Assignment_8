import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
    const { image, name, price, id } = product;

    return (
        <div>
            <div className="card bg-base-100 w-3/4 lg:w-96 mx-auto shadow-xl border border-gray-100 transition hover:scale-105">
                <figure className="p-4">
                    <img 
                        src={image} 
                        alt="Shoes" 
                        className="w-3/4 lg:w-80 h-56 lg:h-72 rounded-2xl" 
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex gap-1 items-center text-xl font-bold">
                        <FaDollarSign /> {price}
                    </div>
                    <div className="card-actions">
                        <Link 
                            to={`/details/${id}`} 
                            className="btn btn-outline btn-primary rounded-full"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
