import S from '../../assets/styles/TitleStyle'

type TitleProps = {
    title: string
}

export const Title = ({ title }: TitleProps) => {
    return (
        <S.Title>
            {title}
        </S.Title>
    )
}