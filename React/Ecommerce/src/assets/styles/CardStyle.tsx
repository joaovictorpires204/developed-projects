import styled from "styled-components";

const CardContainer = styled.div`
    margin: 70px 100px;
`

const ProductCard = styled.div`
    display: flex;
    gap: 25px;
    margin-bottom: 40px;
    border-radius: 20px;
`

const ProductImg = styled.img`
    width: 300px;
    height: 250px;
    border-radius: 20px;
`

const ProductDescrip = styled.div`
    
`

const ProductBtnCard = styled.button`
    background-color: green;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border: none;
    color: white;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
        font-size: large;
    }
`

export default {
    CardContainer,
    ProductCard,
    ProductImg,
    ProductDescrip,
    ProductBtnCard
}