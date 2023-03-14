import S from '../../assets/styles/ProductsStyle'
import { CART_ACTIONS } from '../../store/actions'
import { useCart } from '../../store/context'
import { numberCurrency } from '../../utils'

type Props = ProductItemType

export const ProductItem = (product: Props) => {
    const { id, img, name, price } = product
    const { state, dispatch } = useCart()

    const addCart = () => {
        dispatch({
            type: CART_ACTIONS.ADD_ITEM_CART,
            product: product
        })
    }

    const removeCart = () => {
        dispatch({
            type: CART_ACTIONS.REMOVE_ITEM_CART,
            productId: product.id
        })
    }

    return (
        <S.ProductsCard>
            <S.ProductsImg src={img} alt="" />
            {state.cartProducts.some(product => product.id === id) ?
                <S.AddBtn onClick={removeCart}>Remove Cart</S.AddBtn> :
                <S.AddBtn onClick={addCart}>Add Cart</S.AddBtn>
            }


            <S.ProductsDescrip>
                <div>
                    <strong>{name}</strong>
                </div>
                <div>
                    {numberCurrency.currency(price)}
                </div>
            </S.ProductsDescrip>
        </S.ProductsCard>
    )
}