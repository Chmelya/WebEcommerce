import "./Header.scss"

const Header = () => {
	return (
		<header>
			<div class="nav container">
				<a href="#" class="logo">
					Shop
				</a>
				<div class="nav-icons">
					<i class="bx bx-log-in-circle"></i>
					<i class="bx bxs-user-circle"></i>
					<i class="bx bx-basket"></i>
					<i class="bx bx-log-out-circle"></i>
				</div>
			</div>
		</header>
	);
};

export default Header;
