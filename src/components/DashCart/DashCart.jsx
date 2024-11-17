import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";

const DashCart = ({ product, handleRemoved }) => {
    const { image, name, description, price, id } = product;

    return (
        <div className="my-10 shadow-xl rounded-xl border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-5">
                <figure className="p-10 w-full lg:w-1/4">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="w-3/4 flex flex-col justify-center mx-auto gap-5 pr-5">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-gray-500 text-xs">{description}</p>
                    <h3 className="font-bold">Price: $ {price}</h3>
                </div>
                <div 
                    onClick={() => toast.success('Successfully Removed To Cart!')} 
                    className="text-4xl text-red-500 mr-3 mt-2 cursor-pointer"
                >
                    <MdDeleteForever onClick={() => handleRemoved(id)} />
                </div>
            </div>
        </div>
    );
};

export default DashCart;
