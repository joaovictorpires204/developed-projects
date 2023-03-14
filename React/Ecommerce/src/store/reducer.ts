import { CartActions, CartState } from "../@types/cart";
import { CART_ACTIONS } from "./actions";

export const cartReducer = (state: CartState, action: CartActions): CartState => {
    const total = Number(state.total.toFixed(2))

    if (action.type === CART_ACTIONS.ADD_ITEM_CART) {
        const product = { ...action.product, quantity: 1 }

        return {
            cartProducts: [...state.cartProducts, product],
            total: total + action.product.price
        }
    }

    if (action.type === CART_ACTIONS.REMOVE_ITEM_CART) {
        const productToRemove = state.cartProducts.find(product => product.id === action.productId)

        if (!productToRemove) return state

        return {
            cartProducts: state.cartProducts.filter(product => product.id != productToRemove.id),
            total: total - (productToRemove.price * productToRemove.quantity)
        }
    }

    if (action.type === CART_ACTIONS.UPDATE_QUANTITY_ADD) {
        const addQuantProduct = state.cartProducts.find(product => product.id === action.productId)

        if (!addQuantProduct) return state

        const newUptadProduct = { ...addQuantProduct, quantity: addQuantProduct.quantity + 1 }

        return {
            cartProducts: state.cartProducts.map(product => product.id === newUptadProduct.id ? newUptadProduct : product),
            total: total + newUptadProduct.price
        }
    }

    if (action.type === CART_ACTIONS.UPDATE_QUANTITY_REMOVE) {
        const minusQuantProduct = state.cartProducts.find(product => product.id === action.productId)

        if (!minusQuantProduct) return state

        const newUptadeProduct = { ...minusQuantProduct, quantity: minusQuantProduct.quantity - 1 }

        return {
            cartProducts: state.cartProducts.map(product => product.id === newUptadeProduct.id ? newUptadeProduct : product),
            total: total - newUptadeProduct.price
        }

    }

    if (action.type === CART_ACTIONS.CLEAN_CART) {
        return {
            cartProducts: [],
            total: 0
        }
    }

    return state
}