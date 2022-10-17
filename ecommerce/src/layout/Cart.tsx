import "./Cart.scss";
import { useCart } from "../context/CartContext";
import { getProductById } from "../services/DataService";

import CartProduct from "../models/CartProduct";
import Product from "../models/Product";

const Cart = () => {
	const { cartItems } = useCart();

	return (
		<>
			<div className="cart">
				<h2 className="cart-title">Your Cart</h2>
				<div className="cart-content">
					{cartItems.map((item: any) => {
						return <CartItem item={item} key={item.id} />;
					})}
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

interface CartItemProps {
	item: CartProduct;
}

//TODO: remove any
const CartItem = ({ item }: CartItemProps) => {
	const product = getProductById(item.id) as Product;
	const quantity = item.quantity;

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
						value={quantity}
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
