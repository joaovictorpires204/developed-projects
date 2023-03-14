import { Title } from "../../components/title"
import S from "../../assets/styles/PageStyle"
import { ProductsList } from "../../components/productsList"

export const Home = () => { 
    return(
        <S.HomeContainer>
            <Title title="Home"/>
            <ProductsList />
        </S.HomeContainer>
    )
}