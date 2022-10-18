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
				</div>
			</div>
		</section>
	);
};

export default ProfileSection;
