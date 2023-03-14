import styled from "styled-components";

const Container = styled.div`
margin: 30px ;
width: 100%;
max-width: 1200px;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 20px;
`

const ColumnStyle = styled.div`
background-color: #EAEAEA;
width: 270px;
height: 800px;
padding: 20px;
border-radius: 20px;
`

const TitleStyle = styled.h1`
margin: 10px 30px;
color: #3A72F8;
font-weight: 700;
`

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Container,
    Grid,
    ColumnStyle,
    TitleStyle
}