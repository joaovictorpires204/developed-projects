import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react"
import { CartActions, CartState } from "../@types/cart"
import { cartReducer } from "./reducer"

const initialState: CartState = {
    cartProducts: [],
    total: 0
}

type CartContextProps = {
    state: CartState,
    dispatch: Dispatch<CartActions>
}

export const CartContext = createContext<CartContextProps>({
    state: initialState,
    dispatch: () => null
})

type CartProviderProps = {
    children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    return(
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartState = () => {
    const context = useContext(CartContext)

    return context.state
}

export const useCartDispatch = () => {
    const context = useContext(CartContext)

    return context.dispatch
}

export const useCart = () => {
    const context = useContext(CartContext)

    return context
}