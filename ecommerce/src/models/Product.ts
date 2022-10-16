class Product {
	id: string;
	title: string;
	image: string;
	price: string;
	description: string;

	constructor(
		id: string,
		title: string,
		image: string,
		price: string,
		description: string
	) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.price = price;
		this.description = description;
	}
}

export default Product;
