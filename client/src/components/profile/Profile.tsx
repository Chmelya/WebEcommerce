import "./Profile.scss";
import NearestDelivery from "./NearestDelivery";

const ProfileSection = () => {
	return (
		<section className="profile-section container">
			<h2 className="section-title">Profile</h2>
			<div className="profile-content">
				<ProfileCard />
				<NearestDelivery />
			</div>
		</section>
	);
};

const ProfileCard = () => {
	return (
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
	);
};

export default ProfileSection;
