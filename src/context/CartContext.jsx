import { createContext, useContext, useEffect, useState } from 'react'
const CartContext = createContext()
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('twv-cart') || '[]'))
  useEffect(() => localStorage.setItem('twv-cart', JSON.stringify(items)), [items])
  const addItem = (product) => setItems((old) => { const found = old.find((i) => i.id === product.id); return found ? old.map((i) => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i) : [...old, { ...product, quantity: 1 }] })
  const updateQuantity = (id, amount) => setItems((old) => old.flatMap((i) => i.id === id ? (i.quantity + amount > 0 ? [{ ...i, quantity: i.quantity + amount }] : []) : [i]))
  const removeItem = (id) => setItems((old) => old.filter((i) => i.id !== id))
  const count = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return <CartContext.Provider value={{ items, addItem, updateQuantity, removeItem, count, subtotal }}>{children}</CartContext.Provider>
}
export const useCart = () => useContext(CartContext)
