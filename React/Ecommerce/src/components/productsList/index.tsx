import productsList from '../../assets/db'
import S from "../../assets/styles/ProductsStyle"
import { ProductItem } from '../productItem'

export const ProductsList = () => {
    return (
        <S.ProductsContainer>
            {productsList.map((product) => (
                <ProductItem  key={product.id} {...product}/> 
            ))}
        </S.ProductsContainer>
    )
}