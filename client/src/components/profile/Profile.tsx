import "./Profile.scss";

const ProfileSection = () => {
	return (
		<section className="profile-section container">
			<h2 className="section-title">Profile</h2>
			<div className="profile-content">
				<div className="profile-card">
					<div className="circular">
						<img
							className="profile-img"
							src="https://img-9gag-fun.9cache.com/photo/a3Q5VW5_460s.jpg"
						></img>
					</div>
					<div className="profile-edit-photo">
						<i className="bx bxs-camera-plus load-icon"></i>
						<h4 className="edit-photo-title">Edit Photo</h4>
					</div>
					<ul className="profile-menu">
						<li className="menu-item">
							<i className="bx bx-list-ul"></i>
							<h4 className="item-title">Orders</h4>
						</li>
						<li className="menu-item">
							<i className="bx bxs-heart"></i>
							<h4 className="item-title">Favorites</h4>
						</li>
						<li className="menu-item">
							<i className="bx bx-credit-card"></i>
							<h4 className="item-title">Payment</h4>
						</li>
						<li className="menu-item">
							<i className="bx bx-support"></i>
							<h4 className="item-title">Support</h4>
						</li>
					</ul>
				</div>
				<div className="nearest-delivery">
					<div className="delivery">
						<div className="nearest-delivery-tile-wrapper">
							<h3>Nearest delivery</h3>
							<h3>25.04</h3>
						</div>
						<div className="delivery-carousel">
							<div className="carousel-item">
								<img
									src="https://w7.pngwing.com/pngs/140/752/png-transparent-blue-crew-neck-t-shirt-art-t-shirt-navy-blue-polo-shirt-shirt-tshirt-blue-angle.png"
									alt=""
								></img>
								<h4 className="item-title">T-Shirt</h4>
							</div>
							<div className="carousel-item">
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2nG24AYDm6FOEC7jIfgubO96GbRso2Xshu1f8abSYQ&s"
									alt=""
								></img>
								<h4 className="item-title">T-Shirt</h4>
							</div>
							<div className="carousel-item">
								<img
									src="https://img-9gag-fun.9cache.com/photo/a3Q5VW5_460s.jpg"
									alt=""
								></img>
								<h4 className="item-title">T-Shirt</h4>
							</div>
							<div className="carousel-item">
								<img
									src="https://w7.pngwing.com/pngs/140/752/png-transparent-blue-crew-neck-t-shirt-art-t-shirt-navy-blue-polo-shirt-shirt-tshirt-blue-angle.png"
									alt=""
								></img>
								<h4 className="item-title">T-Shirt</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProfileSection;
