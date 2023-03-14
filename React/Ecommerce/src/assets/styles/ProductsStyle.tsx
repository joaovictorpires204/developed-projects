import styled from "styled-components";

const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    width: 1000px;
    margin: 40px 140px;
`

const ProductsCard = styled.div`
    background-color: green;
    width: 300px;
    height: 250px;
    margin-bottom: 40px;
    border-radius: 20px;
`

const ProductsImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`

const AddBtn = styled.button`
    background-color: transparent;
    position: relative;
    width: 100%;
    height: 100%;
    bottom: 102%;
   /* margin: 0 100px; */
    border: none;
    border-radius: 20px;
    color: transparent;
    cursor: pointer;
    font-size: 20px;

    &:hover{ 
        border: 1px solid black;
        color: white;
        background-color:rgba(0, 0, 0, 0.4);
    }
`

const ProductsDescrip = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    bottom: 230px;
`

export default {
    ProductsContainer,
    ProductsCard,
    ProductsImg,
    AddBtn,
    ProductsDescrip
}