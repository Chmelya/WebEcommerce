import "./Cart.scss";
import { useCart } from "../context/CartContext";
import { getProductsByCart } from "../services/DataService";

import Product from "../models/Product";

const Cart = () => {
	const { cartItems } = useCart();
	const products = getProductsByCart(cartItems);

	return (
		<>
			<div className="cart">
				<h2 className="cart-title">Your Cart</h2>
				<div className="cart-content">
					{/* <ListCart items={cartItems} /> */}
					<div className="cart-total">
						<div className="cart-total-title">Total</div>
						<div className="cart-total-price">$22</div>
					</div>
					<button className="cart-btn-buy">Buy Now</button>
					<i className="bx bx-x" id="cart-close" onClick={onClickCartClose}></i>
				</div>
			</div>
		</>
	);
};

//TODO: remove any
const ListCart = (items: Product[]) => {
	// const cartItems = () => {
	// 	if (items?.count === 0) {
	// 		return <></>;
	// 	} else {
	// 		items.map((product: any) => {
	// 			return <CartItem {...product} key={product.id} />;
	// 		});
	// 	}
	// };

	const cartItems = items.map((product: any) => {
		return <CartItem {...product} key={product.id} />;
	});

	return <>{cartItems}</>;
};

//TODO: remove any
const CartItem = (product: any) => {
	return (
		<>
			<div className="cart-item" key={product.id}>
				<img src={product.image} alt="" className="cart-item-image" />
				<div className="cart-item-details">
					<h2 className="cart-item-title">{product.title}</h2>
					<span className="cart-item-price">${product.price}</span>
					<input
						className="cart-item-quantity"
						type="number"
						value={product.quantity}
					/>
				</div>
				<i className="bx bx-trash-alt cart-item-remove"></i>
			</div>
		</>
	);
};

const onClickCartClose = () => {
	const cart = document.querySelector(".cart") as HTMLElement;
	cart.classList.remove("active");
};

export default Cart;
