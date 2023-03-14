import { GlobalStyle } from "../../assets/styles/GLobalStyle"
import { Router } from "../../routes"
import { CartProvider } from "../../store/context"

function App() {
  return (
    <>
      <CartProvider>
        <GlobalStyle />
        <Router />
      </CartProvider>
    </>
  )
}

export default App
