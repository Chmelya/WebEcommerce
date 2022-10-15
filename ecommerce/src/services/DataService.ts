import products from "../data/products.json";
import cartProducts from "../data/cartProducts.json";

// TODO: Remove moq

export const getProducts = () => {
	return products;
};

export const getCartProducts = () => {
	return cartProducts;
};
