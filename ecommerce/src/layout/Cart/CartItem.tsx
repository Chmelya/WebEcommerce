import "./CartItem.scss";

import { getProductById } from "../../services/DataService";
import { useCart } from "../../context/CartContext";

import CartProduct from "../../models/CartProduct";
import Product from "../../models/Product";

interface CartItemProps {
	item: CartProduct;
}

//TODO: remove any
const CartItem = ({ item }: CartItemProps) => {
	const { removeFromCart } = useCart();

	const product = getProductById(item.id) as Product;
	const quantity = item.quantity;
	const finalPrice = product.price * quantity;

	return (
		<>
			<div className="cart-item" key={product.id}>
				<img src={product.image} alt="" className="cart-item-image" />
				<div className="cart-item-details">
					<h2 className="cart-item-title">{product.title}</h2>
					<span className="cart-item-price">${finalPrice}</span>
					<input
						className="cart-item-quantity"
						type="number"
						value={quantity}
					/>
				</div>
				<i
					className="bx bx-trash-alt cart-item-remove"
					onClick={() => removeFromCart(item.id)}
				></i>
			</div>
		</>
	);
};

export default CartItem;
