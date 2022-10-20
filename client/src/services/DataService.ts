import products from "../data/products.json";

import Product from "../models/Product";

// TODO: Remove moq
export function getProducts() {
	return products;
}

//Remove moq
export function getProductById(id: string) {
	const product = products.find((i: any) => i.id === id) as Product;
	return product;
}
