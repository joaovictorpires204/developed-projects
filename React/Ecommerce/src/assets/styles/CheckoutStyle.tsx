import styled from "styled-components";

const PProducts = styled.p`
    font-size: 30px;
    
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    width: 1000px; 
    margin: 70px 100px;
    
`

const ProductImg = styled.img`
    width: 160px;
    height: 120px;
    border-radius: 10px;
`

const CheckoutInfo = styled.p`
    font-size: 20px;
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
    PProducts,
    CardContainer,
    ProductImg,
    CheckoutInfo,
    Btn
}