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
						{/* <i className="bx bx-log-in-circle"></i> */}
						<i className="bx bxs-user-circle"></i>
						<i
							className="bx bx-basket"
							id="cart-icon"
							onClick={onClickCart}
						></i>
						<i className="bx bx-log-out-circle"></i>
					</div>
				</div>
			</header>
		</>
	);
};

let cart = document.querySelector(".cart");

const onClickCart = () => {
	cart.classList.add("active");
};

export default Header;
