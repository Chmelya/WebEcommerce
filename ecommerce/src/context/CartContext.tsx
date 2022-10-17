import { createContext, ReactNode, useContext, useState } from "react";
import CartProduct from "../models/CartProduct";

type CartProviderProps = {
	children: ReactNode;
};

type CartContext = {
	getItemQuantity: (id: string) => number;
	increaseCartQuantity: (id: string) => void;
	decreaseCartQuantity: (id: string) => void;
	removeFromCart: (id: string) => void;
	cartItems: CartProduct[];
	productsCount: number;
};

const CartContext = createContext({} as CartContext);

export function useCart() {
	return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
	const [cartItems, setCartItems] = useState<CartProduct[]>([]);

	const productsCount = cartItems.reduce((total, item) => {
		return (total += 1);
	}, 0);

	function getItemQuantity(id: string) {
		const item = cartItems.find((item) => item.id === id);
		return item?.quantity || 0;
	}

	function increaseCartQuantity(id: string) {
		setCartItems((items) => {
			if (items.find((item) => item.id === id) == null) {
				return [...items, { id, quantity: 1 }];
			} else {
				return items.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	}

	function decreaseCartQuantity(id: string) {
		setCartItems((items) => {
			if (items.find((item) => item.id === id)?.quantity === 1) {
				return items.filter((item) => item.id !== id);
			} else {
				return items.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	}

	function removeFromCart(id: string) {
		setCartItems((items) => {
			return items.filter((item) => item.id !== id);
		});
	}

	return (
		<CartContext.Provider
			value={{
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
				cartItems,
				productsCount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
