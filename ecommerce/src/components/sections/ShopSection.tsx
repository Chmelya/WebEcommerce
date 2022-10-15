import "./ShopSection.scss";
import { getProducts } from "../../services/DataService";

const ShopSection = () => {
	return (
		<>
			<section className="shop container">
				<h2 className="section-title">Shop Products</h2>
				<div className="shop-content">
					<ListItems />
				</div>
			</section>
		</>
	);
};

const ListItems = () => {
	const products = getProducts().map((product: any) => {
		return <ShopItem {...product} key={product.id} />;
	});

	return <>{products}</>;
};

//TODO
const ShopItem = (product: any) => {
	return (
		<>
			<div className="shop-item">
				<img src={product.image} alt="" className="shop-item-image" />
				<h2 className="shop-item-title">{product.title}</h2>
				<span className="shop-item-price">${product.price}</span>
				<i className="bx bx-shopping-bag shop-item-add-icon"></i>
			</div>
		</>
	);
};

export default ShopSection;
