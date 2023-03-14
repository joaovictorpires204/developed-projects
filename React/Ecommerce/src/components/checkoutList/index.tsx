import { Link } from "react-router-dom"
import { CartProduct } from "../../@types/cart"
import S from "../../assets/styles/CheckoutStyle"
import { useCart } from "../../store/context"
import { numberCurrency } from "../../utils"

type Props = {
    products: CartProduct[]
}

export const CheckoutList = ({ products }: Props) => {
    const { state, dispatch } = useCart()

    return (
        <>
            <S.PProducts>Selected Products:</S.PProducts>
            <S.CardContainer>
                {products.map((product) => (
                    <div key={product.id}>
                        <S.ProductImg src={product.img} alt="" />
                    </div>
                ))}
            </S.CardContainer>
            <S.CheckoutInfo>Total Quantity: {state.cartProducts.reduce((acc, currenty) => (acc + currenty.quantity), 0)}</S.CheckoutInfo>
            <S.CheckoutInfo>Total Quantity: {numberCurrency.currency(state.total)}</S.CheckoutInfo>
            <Link to="/finished"><S.Btn>Finish order</S.Btn></Link>
        </>
    )
}