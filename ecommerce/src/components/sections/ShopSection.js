import "./ShopSection.scss";

const ShopSection = () => {
	return (
		<section class="shop container">
			<h2 class="section-title">Shop Products</h2>
			<div class="shop-content">
				<ShopItem />
				<ShopItem />
				<ShopItem />
				<ShopItem />
				<ShopItem />
				<ShopItem />
				<ShopItem />
			</div>
		</section>
	);
};

const ShopItem = () => {
	return (
		<>
			<div className="shop-item">
				<img
					src="https://w7.pngwing.com/pngs/140/752/png-transparent-blue-crew-neck-t-shirt-art-t-shirt-navy-blue-polo-shirt-shirt-tshirt-blue-angle.png"
					alt=""
					className="shop-item-image"
				/>
				<h2 className="shop-item-title">Shirt</h2>
				<span className="shop-item-price">23$</span>
				<i className="bx bx-shopping-bag shop-item-add-icon"></i>
			</div>
		</>
	);
};

export default ShopSection;
