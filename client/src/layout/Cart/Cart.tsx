import "./Cart.scss";
import { useCart } from "../../context/CartContext";
import { getProductById } from "../../services/DataService";
import CartItem from "./CartItem";

const Cart = () => {
	const { cartItems } = useCart();

	const totalPrice = cartItems.reduce((total, item) => {
		return total + getProductById(item.id).price * item.quantity;
	}, 0);

	const onClickCartClose = () => {
		const cart = document.querySelector(".cart") as HTMLElement;
		cart.classList.remove("active");
	};

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
						<div className="cart-total-price">${totalPrice}</div>
					</div>
					<button className="cart-btn-buy">Buy Now</button>
					<i className="bx bx-x" id="cart-close" onClick={onClickCartClose}></i>
				</div>
			</div>
		</>
	);
};

export default Cart;
