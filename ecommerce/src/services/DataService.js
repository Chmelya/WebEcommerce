import products from "../data/products";
import cartProducts from "../data/cartProducts";

// TODO: Remove moq

export const getProducts = () => {
	return products;
};

export const getCartProducts = () => {
	return cartProducts;
};
