import "./ShopSection.scss";
import { getProducts } from "../../services/DataService";
import { useCart } from "../../context/CartContext";

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

//TODO: remove any
const ShopItem = (product: any) => {
	const {
		getItemQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
		removeFromCart,
	} = useCart();

	const id = product.id;
	const quantity = getItemQuantity(id);

	return (
		<>
			<div className="shop-item">
				<img src={product.image} alt="" className="shop-item-image" />
				<h2 className="shop-item-title">{product.title}</h2>
				<span className="shop-item-price">${product.price}</span>
				<div className="shop-icon-holder">
					<>
						{quantity === 0 ? (
							<i
								className="bx bx-shopping-bag shop-item-icon"
								onClick={() => increaseCartQuantity(id)}
							></i>
						) : (
							<>
								{/* <i
									className="bx bx-x shop-item-icon remove"
									onClick={() => removeFromCart(id)}
								></i> */}
								<i
									className="bx bx-minus shop-item-icon"
									onClick={() => decreaseCartQuantity(id)}
								></i>
								<i className="shop-item-icon quantity">{quantity}</i>
								<i
									className="bx bx-plus shop-item-icon"
									onClick={() => increaseCartQuantity(id)}
								></i>
							</>
						)}
					</>
				</div>
			</div>
		</>
	);
};

export default ShopSection;
