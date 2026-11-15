import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header, Footer } from './components/Layout'
import { Home, Shop, Product, Cart, About, FAQ, Contact } from './pages'
import Admin from './pages/Admin'
function ScrollTop(){const {pathname}=useLocation();useEffect(()=>window.scrollTo({top:0,behavior:'smooth'}),[pathname]);return null}
export default function App(){return <><ScrollTop/><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/shop" element={<Shop/>}/><Route path="/shop/:id" element={<Product/>}/><Route path="/cart" element={<Cart/>}/><Route path="/about" element={<About/>}/><Route path="/faq" element={<FAQ/>}/><Route path="/contact" element={<Contact/>}/><Route path="/admin" element={<Admin/>}/></Routes><Footer/></>}
