import { Link } from 'react-router-dom'
import S from '../../../assets/styles/LayoutStyle'
import { useCartState } from '../../../store/context'

export const Footer = () => {
    const { cartProducts } = useCartState()

    return (
        <S.FooterLayout>
            <S.FooterContent>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}><S.OptionHover>Home</S.OptionHover></Link>
                <Link to="/products" style={{ textDecoration: "none", color: "white" }}><S.OptionHover>Products</S.OptionHover></Link>
                <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
                    <S.CartMenu>Cart
                        <S.CartMenuCircle>
                            {cartProducts.reduce((acc, currenty) => (acc + currenty.quantity), 0)}
                        </S.CartMenuCircle>
                    </S.CartMenu>
                </Link>
            </S.FooterContent>
        </S.FooterLayout>
    )
}