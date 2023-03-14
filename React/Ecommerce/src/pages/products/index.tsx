import S from '../../assets/styles/PageStyle'
import { ProductsList } from '../../components/productsList'
import { Title } from '../../components/title'

export const Products = () => {
    return(
        <S.HomeContainer>
            <Title title='Products'/>
            <ProductsList />
        </S.HomeContainer>
    )
}