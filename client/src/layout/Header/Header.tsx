import { useCart } from "../../context/CartContext";
import "./Header.scss";

const Header = () => {
	return (
		<>
			<header>
				<div className="nav container">
					<a href="#" className="logo">
						Shop
					</a>
					<div className="nav-icons">
						{/* TODO make a suitable icons */}
						{/* <i className="bx bx-log-in-circle"></i> */}
						<i className="bx bxs-user-circle"></i>
						<div className="cart-wrapper">
							<i
								className="bx bx-basket"
								id="cart-icon"
								onClick={onClickCartOpen}
							></i>
							<Circle />
						</div>
						<i className="bx bx-log-out-circle"></i>
					</div>
				</div>
			</header>
		</>
	);
};

const Circle = () => {
	const { productsCount } = useCart();

	const getTotalCount = () => {
		if (productsCount >= 10) {
			return "9+";
		}

		return productsCount;
	};

	if (productsCount === 0) {
		return <></>;
	}

	return <div className="cart-counter">{getTotalCount()}</div>;
};

let onClickCartOpen = () => {
	let cart = document.querySelector(".cart") as HTMLElement;
	cart.classList.add("active");
};

export default Header;
