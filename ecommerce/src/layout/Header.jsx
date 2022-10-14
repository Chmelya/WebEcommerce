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
							onClick={onClickCartOpen}
						></i>
						<i className="bx bx-log-out-circle"></i>
					</div>
				</div>
			</header>
		</>
	);
};

let onClickCartOpen = () => {
	let cart = document.querySelector(".cart");
	cart.classList.add("active");
};

export default Header;
