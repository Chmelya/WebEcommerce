import { Route, Routes } from "react-router";
import { CartProvider } from "./context/CartContext";
import Layout from "./layout/Layout";
import ShopSection from "./components/sections/ShopSection";
import ProfileSection from "./components/profile/Profile";


function App() {
	return (
		<>
			<CartProvider>
				<Layout />
				<Routes>
					{/* TODO */}
					<Route path="1" element={<ShopSection />} />
					<Route path="" element={<ProfileSection />} />
				</Routes>
			</CartProvider>
		</>
	);
}

export default App;
