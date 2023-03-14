import S from "../../assets/styles/PageStyle"
import { CheckoutList } from "../../components/checkoutList"
import { Title } from "../../components/title"
import { useCart } from "../../store/context"

export const Checkout = () => {
    const { state, dispatch } = useCart()

    return (
        <S.HomeContainer>
            <Title title="Checkout" />
            <CheckoutList products={state.cartProducts}/>
        </S.HomeContainer>
    )
}