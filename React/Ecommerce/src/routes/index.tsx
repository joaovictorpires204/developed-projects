import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "../components/layout"
import { Cart } from "../pages/cart"
import { Checkout } from "../pages/checkout"
import { FinishedPage } from "../pages/finished"
import { Home } from "../pages/home"
import { Products } from "../pages/products"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/finished" element={<FinishedPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}