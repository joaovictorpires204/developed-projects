import styled from "styled-components";

const MenuLayout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: green;
    width: 100%;
    height: 70px;
    color: white;
`

const MenuTitle = styled.div`
    margin: 0 100px;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 2px;
`

const MenuOptions = styled.div`
    display: flex;
    gap: 20px;
    margin: 0 100px;
`

const OptionHover = styled.div`
&:hover{
transform: scale(1.2);
}
`

const CartMenu = styled.div`
    display: flex;

    &:hover{
transform: scale(1.2);
}
`

const CartMenuCircle = styled.div`
    position: relative;
    background-color: red;
    width: 20px;
    bottom: 10px;
    border-radius: 50px;
    text-align: center;
`

const FooterLayout = styled.div`
    display: flex;
    background-color: green;
    width: 100%;
    height: 200px;
`

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 30px 100px;
`

export default {
    MenuLayout,
    MenuTitle,
    MenuOptions,
    OptionHover,
    CartMenu,
    CartMenuCircle,
    FooterLayout,
    FooterContent
}