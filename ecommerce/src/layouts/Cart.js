import "./Cart.scss";

const Cart = () => {
	return (
		<>
			<div className="cart">
				<h2 className="cart-title">Your Cart</h2>
				<div className="cart-content">
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
					<div className="cart-total">
						<div className="cart-total-title">Total</div>
						<div className="cart-total-price">$523</div>
					</div>
					<button className="cart-btn-buy">Buy Now</button>
					<i className="bx bx-x" id="cart-close" onClick={onClickCartClose}></i>
				</div>
			</div>
		</>
	);
};

const onClickCartClose = () => {
	let cart = document.querySelector(".cart");
	cart.classList.remove("active");
};

const CartItem = () => {
	return (
		<>
			<div className="cart-item">
				<img
					src="https://w7.pngwing.com/pngs/140/752/png-transparent-blue-crew-neck-t-shirt-art-t-shirt-navy-blue-polo-shirt-shirt-tshirt-blue-angle.png"
					alt=""
					className="cart-item-image"
				/>
				<div className="cart-item-details">
					<h2 className="cart-item-title">Shirt</h2>
					<span className="cart-item-price">23$</span>
					{/* <input className="cart-item-quantity" type="number" value="1" /> */}
				</div>
				<i className="bx bx-trash-alt cart-item-remove"></i>
			</div>
		</>
	);
};

export default Cart;
