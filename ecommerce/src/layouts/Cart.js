import "./Cart.scss";

const Cart = () => {
	return (
		<div class="cart">
			<h2 class="cart-title">Your Cart</h2>
			<div class="cart-content">
				<div class="cart-item">
					<img
						src="https://w7.pngwing.com/pngs/140/752/png-transparent-blue-crew-neck-t-shirt-art-t-shirt-navy-blue-polo-shirt-shirt-tshirt-blue-angle.png"
						alt=""
						class="cart-item-image"
					/>
					<div class="cart-item-details">
						<h2 class="cart-item-title">Shirt</h2>
						<span class="cart-item-price">23$</span>
						<input class="cart-item-quantity" type="number" value="1" />
					</div>
					<i class="bx bx-trash-alt cart-item-remove"></i>
				</div>
				<div class="cart-total">
					<div class="cart-total-title">Total</div>
					<div class="cart-total-price">$523</div>
				</div>
				<button class="cart-btn-buy">Buy Now</button>
				<i class="bx bx-x" id="cart-close"></i>
			</div>
		</div>
	);
};

export default Cart;
