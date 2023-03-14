import styled from "styled-components";

const HomeContainer = styled.div`
    padding: 50px;
`

const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Btn = styled.button`
    background-color: green;
    width: 150px;
    height: 40px;
    margin-bottom: 10px;
    border: none;
    color: white;
    cursor: pointer;
    text-align: center;

    &:hover{
        transform: scale(1.2);
        font-size: large;
    }
`

export default {
    HomeContainer,
    BtnContainer,
    Btn
}