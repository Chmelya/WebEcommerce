import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./NearestDelivery.scss";

const NearestDelivery = () => {
	const [width, setWidth] = useState(0);
	//TODO: remove any
	const carousel = useRef<any>();

	useEffect(() => {
		const width = carousel.current.scrollWidth - carousel.current.offsetWidth;
		setWidth(width);
	}, []);

	return (
		<div className="nearest-delivery">
			<div className="delivery">
				<div className="nearest-delivery-tile-wrapper">
					<h3>Nearest delivery</h3>
					<h3>25.04</h3>
				</div>
				<motion.div
					ref={carousel}
					className="delivery-carousel-wrapper"
					whileTap={{ cursor: "grabbing" }}
				>
					<motion.div
						drag="x"
						dragConstraints={{ right: 0, left: -width }}
						className="delivery-carousel"
					>
						<DeliveryItem key={1} />
						<DeliveryItem key={165} />
						<DeliveryItem key={5} />
						<DeliveryItem key={4} />
						<DeliveryItem key={3} />
						<DeliveryItem key={2} />
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

const DeliveryItem = () => {
	return (
		<motion.div className="carousel-item">
			<img
				src="https://w7.pngwing.com/pngs/140/752/png-transparent-blue-crew-neck-t-shirt-art-t-shirt-navy-blue-polo-shirt-shirt-tshirt-blue-angle.png"
				alt=""
			></img>
			<h4 className="item-title">T-Shirt</h4>
		</motion.div>
	);
};

export default NearestDelivery;
