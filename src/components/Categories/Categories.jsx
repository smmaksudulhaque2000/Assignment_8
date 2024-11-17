import { NavLink } from "react-router-dom";

const Categories = () => {
    return (
        <div className="w-full lg:w-2/12 rounded-xl grid grid-cols-2 lg:flex lg:flex-col gap-5 p-4 bg-gray-400 lg:h-[600px]">
            <NavLink
                className={({ isActive }) => 
                    `p-4 btn-outline font-bold rounded-full bg-gray-300 ${isActive ? 'bg-purple-700 text-white' : 'hover:text-warning'}`
                }
                to={"/"}
            >
                All Product
            </NavLink>
            <NavLink
                className={({ isActive }) => 
                    `p-4 btn-outline font-bold rounded-full bg-gray-300 ${isActive ? 'bg-purple-700 text-white' : 'hover:text-warning'}`
                }
                to={"/laptops"}
            >
                Laptops
            </NavLink>
            <NavLink
                className={({ isActive }) => 
                    `p-4 btn-outline font-bold rounded-full bg-gray-300 ${isActive ? 'bg-purple-700 text-white' : 'hover:text-warning'}`
                }
                to={"/phones"}
            >
                Phones
            </NavLink>
            <NavLink
                className={({ isActive }) => 
                    `p-4 btn-outline font-bold rounded-full bg-gray-300 ${isActive ? 'bg-purple-700 text-white' : 'hover:text-warning'}`
                }
                to={"/accessories"}
            >
                Accessories
            </NavLink>
            <NavLink
                className={({ isActive }) => 
                    `p-4 btn-outline font-bold rounded-full bg-gray-300 ${isActive ? 'bg-purple-700 text-white' : 'hover:text-warning'}`
                }
                to={"/smartwatches"}
            >
                Smart Watches
            </NavLink>
            <NavLink
                className={({ isActive }) => 
                    `p-4 btn-outline font-bold rounded-full bg-gray-300 ${isActive ? 'bg-purple-700 text-white' : 'hover:text-warning'}`
                }
                to={"/macbook"}
            >
                MacBook
            </NavLink>
            <NavLink
                className={({ isActive }) => 
                    `p-4 btn-outline font-bold rounded-full bg-gray-300 ${isActive ? 'bg-purple-700 text-white' : 'hover:text-warning'}`
                }
                to={"/iphone"}
            >
                IPhone
            </NavLink>
        </div>
    );
};

export default Categories;
