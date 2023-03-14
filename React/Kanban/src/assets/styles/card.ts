import styled from "styled-components";

const Card = styled.div`
background-color: #F8F8F8;
width: 93%;
height: 190px;
margin-top: 20px;
padding: 10px;
border-radius: 30px;
box-shadow: 2px 10px 10px 2px grey;
`

const Input = styled.input`
width: 92%;
min-height: 30px;
margin: 10px 0 5px;
padding: 2px 10px;
border-radius: 20px;
border: none;
outline: 1px solid grey;

&:not(input){
height: 80px;
}
`

const CardHeader = styled.header`
display: flex;
justify-content: space-between;
`

const CardHeaderEdit = styled.img`
margin: 15px 0px;
cursor: pointer;

&:hover{
    transform: scale(1.2);
}
`

const FooterCardAdd = styled.img`
margin: 10px 110px;
cursor: pointer;

&:hover{
    transform: scale(1.2);
}
`
const FooterCard = styled.img`
position: absolute;
margin: 20px 0px;
cursor: pointer;

&:hover{
    transform: scale(1.2);
}
`

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Card,
    Input,
    CardHeader,
    CardHeaderEdit,
    FooterCardAdd,
    FooterCard
}