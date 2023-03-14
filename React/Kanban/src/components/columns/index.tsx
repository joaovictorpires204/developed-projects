import S from "../../assets/styles/grid"

type ColumnType = {
    title: string
    children?: React.ReactNode
}

export const Column = ({ title, children }: ColumnType) => {
    return (
        <S.ColumnStyle>
            <S.TitleStyle>{title}</S.TitleStyle>
            {children}
        </S.ColumnStyle>
    )
}