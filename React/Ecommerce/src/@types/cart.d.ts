import { CART_ACTIONS } from "../store/actions"

type CartProduct = ProductItemType & {
    quantity: number
}

type CartState = {
    cartProducts: CartProduct[]
    total: number
}

type CartActions =
    | { type: CART_ACTIONS.ADD_ITEM_CART, product: ProductItemType }
    | {type: CART_ACTIONS.REMOVE_ITEM_CART, productId: ProductItemType['id']}
    | {type: CART_ACTIONS.UPDATE_QUANTITY_ADD, productId: ProductItemType['id']}
    | {type: CART_ACTIONS.UPDATE_QUANTITY_REMOVE, productId: ProductItemType['id']}
    | {type: CART_ACTIONS.CLEAN_CART}