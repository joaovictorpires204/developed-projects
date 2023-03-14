import { Outlet } from 'react-router-dom'
import { Footer } from './footer'
import { Menu } from './home'

export const Layout = () => {
    return (
        <>
        <Menu />
        <Outlet />
        <Footer />
        </>
    )
}