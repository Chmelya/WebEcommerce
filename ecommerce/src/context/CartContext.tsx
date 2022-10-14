import { createContext, ReactNode, useContext, useState } from "react";

type CartProviderProps = {
    children: ReactNode
}

type CartItem = {
	id: string,
	quantity: number
}

type CartContext = {
	getItemQuantity: (id: string) => number
	increaseCartQuantity: (id: string) => void
	decreaseCartQuantity: (id: string) => void
	removeFromCart: (id: string) => void
}

const CartContext = createContext({} as CartContext)

export function useCart() {
	return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps) {
	const [cartItems, setCartItems] = useState<CartItem[]>([])
	
	function getItemQuantity(id: string)
	{
		const item = cartItems.find(item => item.id === id)
		return item?.quantity || 0
	}

	function increaseCartQuantity(id: string){
		setCartItems(items => {
			if(items.find(item => item.id === id) == null) {
				return [...items, {id, quantity: 1}]
			} else{
				return items.map(item =>{
					if(item.id === id){
						return { ...item, quantity: item.quantity + 1}					}
					else {
						return item
					}
				})
			}
		})
	}

	function decreaseCartQuantity(id: string){
		setCartItems(items => {
			if(items.find(item => item.id === id)?.quantity === 1) {
				return items.filter(item => item.id != id)
			} else{
				return items.map(item =>{
					if(item.id === id){
						return { ...item, quantity: item.quantity - 1}					}
					else {
						return item
					}
				})
			}
		})
	}

	function removeFromCart(id: string){
		setCartItems(items => {
			return items.filter(item => item.id != id)
		})
	}

	return (
		<CartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
			{children}
		</CartContext.Provider>
	)
}
