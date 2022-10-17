import products from "../data/products.json";
import cartProducts from "../data/cartProducts.json";

import Product from "../models/Product";

// TODO: Remove moq
export function getProducts() {
	return products;
}

export function getCartProducts() {
	return cartProducts;
}

//Remove moq
export function getProductById(id: string) {
	const p = products.find((i: any) => i.id === id) as Product;
	return p;
}
