import { useEffect, useState } from "react";
import { deleteWishtList, getWishList } from "../Utils";
import DashWish from "../DashWish/DashWish";
import { Helmet } from 'react-helmet';

const WishList = () => {
    const [wish, setWish] = useState([]);

    useEffect(() => {
        const wishList = getWishList();
        setWish(wishList);
    }, []);

    const handleRemoved = (id) => {
        deleteWishtList(id);
        const wishList = getWishList();
        setWish(wishList);
    };

    return (
        <div className="w-3/4 mx-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Wish | Gadget Heaven</title>
                <link rel="canonical" href="http://localhost:5173/dashboard/wishlist" />
            </Helmet>
            <div>
                <h3 className="text-xl font-bold">WishList</h3>
            </div>
            <div>
                {
                    wish.map(wish => (
                        <DashWish 
                            handleRemoved={handleRemoved} 
                            product={wish} 
                            key={wish.id} 
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default WishList;
