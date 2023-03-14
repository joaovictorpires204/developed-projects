import S from '../../assets/styles/CardStyle'
import { CartProduct } from "../../@types/cart"
import { numberCurrency } from '../../utils'
import { useCart } from '../../store/context'

type Props = {
    cartList: CartProduct[],
    add: (product: CartProduct) => void
    remove: (product: CartProduct) => void
}

export const CartList = ({ cartList, add, remove }: Props) => {
    return (
        <S.CardContainer>
            {cartList.map((product) => (
                <S.ProductCard key={product.id}>
                    <S.ProductImg src={product.img} alt="" />
                    <div>
                        <h1>{product.name}</h1>
                        <p>Unit Value: {numberCurrency.currency(product.price)}</p>
                        <p>Total: {numberCurrency.currency(product.price * product.quantity)}</p>
                        <p>Quantity: {product.quantity}</p>
                        <div>
                            <S.ProductBtnCard onClick={() => add(product)}>+</S.ProductBtnCard>
                            <S.ProductBtnCard onClick={() => remove(product)}>-</S.ProductBtnCard>
                        </div>
                    </div>
                </S.ProductCard>
            ))}
        </S.CardContainer>
    )
}