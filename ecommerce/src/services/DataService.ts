import products from "../data/products.json";
import cartProducts from "../data/cartProducts.json";

import Product from "../models/Product";
import CartItem from "../models/CartItem";

// TODO: Remove moq
export function getProducts() {
	return products;
}

export function getCartProducts() {
	return cartProducts;
}

//Remove moq
export function getProductsByCart(cartItems: CartItem[]) {
	return cartProducts;
}
