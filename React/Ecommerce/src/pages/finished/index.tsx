import S from '../../assets/styles/PageStyle'
import { Title } from '../../components/title'
import Delivery from '../../assets/delivery.png'

export const FinishedPage = () => {
    return (
        <S.HomeContainer>
            <Title title='Thank you for ordering with us!!' />
            <img src={Delivery} alt="" width={'60%'} style={{margin: "20px 250px"}}/>
        </S.HomeContainer>
    )
}