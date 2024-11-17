import toast from "react-hot-toast";

// Get All Data From Local Storage
const getCartList = () => {
  const cartListLocalData = localStorage.getItem("cart");

  if (cartListLocalData) {
    const cartList = JSON.parse(cartListLocalData);
    return cartList;
  } else {
    return [];
  }
};


const getWishList = () => {
  const wishListLocalData = localStorage.getItem("wish");

  if (wishListLocalData) {
    const wishList = JSON.parse(wishListLocalData);
    return wishList;
  } else {
    return [];
  }
};

// Add Local Storage
const addCartList = (product) => {
  const cartList = getCartList();
  const isExist = cartList.find((item) => item.id === parseInt(product.id));

  if (isExist) {
    return toast.error("Already Added To Cart");
  }

  cartList.push(product);
  localStorage.setItem("cart", JSON.stringify(cartList));
  toast.success("Successfully Added To Cart!");
};


const addWishList = (product) => {
  const wishList = getWishList();
  const isExist = wishList.find((item) => item.id === parseInt(product.id));

  if (isExist) {
    return toast.error("Already Added To Wish");
  }

  wishList.push(product);
  localStorage.setItem("wish", JSON.stringify(wishList));
  toast.success("Successfully Added To Wish!");
};

// Remove Local Storage
const deleteCartList = (id) => {
  const cartList = getCartList();
  const remaining = cartList.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(remaining));
};


const deleteWishtList = (id) => {
  const wishList = getWishList();
  const remaining = wishList.filter((item) => item.id !== id);
  localStorage.setItem("wish", JSON.stringify(remaining));
  toast.success("Successfully Removed To Wish!");
};

export {
  addCartList,
  getCartList,
  deleteCartList,
  addWishList,
  getWishList,
  deleteWishtList,
};
