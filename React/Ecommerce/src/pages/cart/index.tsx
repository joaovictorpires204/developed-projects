import { Link } from 'react-router-dom'
import { CartProduct } from '../../@types/cart'
import S from '../../assets/styles/PageStyle'
import { CartList } from '../../components/cartList'
import { Title } from '../../components/title'
import { CART_ACTIONS } from '../../store/actions'
import { useCart } from '../../store/context'
import { numberCurrency } from '../../utils'


export const Cart = () => {
    const { state, dispatch } = useCart()

    const addQuant = (product: CartProduct) => {
        dispatch({
            type: CART_ACTIONS.UPDATE_QUANTITY_ADD,
            productId: product.id
        })
    }

    const removeQuant = (product: CartProduct) => {
        if (product.quantity === 1) {
            dispatch({
                type: CART_ACTIONS.REMOVE_ITEM_CART,
                productId: product.id
            })
            return
        }

        dispatch({
            type: CART_ACTIONS.UPDATE_QUANTITY_REMOVE,
            productId: product.id
        })
    }

    const cleanCart = () => {
        dispatch({
            type: CART_ACTIONS.CLEAN_CART
        })
    }

    return (
        <S.HomeContainer>
            <Title title='Cart' />
            <CartList cartList={state.cartProducts} add={addQuant} remove={removeQuant} />
            <h2><strong>Total: </strong>{numberCurrency.currency(state.total)}</h2>
            <S.Btn onClick={cleanCart}> Clean Cart</S.Btn>
            <S.BtnContainer>
                <Link to="/products"><S.Btn>Keep Buying</S.Btn></Link>
                {state.total === 0 ?  <Link to="/checkout"><S.Btn disabled>Checkout</S.Btn></Link> : <Link to="/checkout"><S.Btn>Checkout</S.Btn></Link>}

            </S.BtnContainer>
        </S.HomeContainer>
    )
}