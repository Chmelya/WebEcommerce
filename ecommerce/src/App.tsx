import Layout from "./layout/Layout";
import ShopSection from "./components/sections/ShopSection";
import { Route, Routes } from "react-router";
import { CartProvider } from "./context/CartContext";

function App() {
	return (
		<>
			<CartProvider>
				<Layout />
				<Routes>
					{/* TODO */}
					<Route path="" element={<ShopSection />} />
				</Routes>
			</CartProvider>
		</>
	);
}

export default App;
