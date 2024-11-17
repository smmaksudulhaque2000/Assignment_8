import { MdDeleteForever } from "react-icons/md";
import { addCartList } from "../Utils";

const DashWish = ({ product, handleRemoved }) => {
  const { image, name, description, price, id } = product;

  const handleCartList = () => {
    addCartList(product);
  };

  return (
    <div className="my-10 shadow-xl rounded-xl border border-gray-100">
      <div className="flex flex-col lg:flex-row gap-5">
        <figure className="p-10 w-full lg:w-1/4">
          <img src={image} alt={name} className="rounded-xl" />
        </figure>
        <div className="mx-auto w-3/4 flex flex-col justify-center gap-5 pr-5">
          <h2 className="card-title">{name}</h2>
          <p className="text-gray-500 text-xs">{description}</p>
          <h3 className="font-bold">Price: ${price}</h3>
          <button
            onClick={handleCartList}
            className="w-full lg:w-1/4 text-white gap-2 bg-purple-700 py-2 rounded-full"
          >
            Add To Cart
          </button>
        </div>
        <div className="text-4xl text-red-500 mr-3 mt-2 cursor-pointer">
          <MdDeleteForever onClick={() => handleRemoved(id)} />
        </div>
      </div>
    </div>
  );
};

export default DashWish;
