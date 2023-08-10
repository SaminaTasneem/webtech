import React from "react";
import Styled from "styled-components";

const Home=()=>{
    return <Wrapper>Home</Wrapper>
};

const Wrapper=Styled.section`
    background-color: ${({theme}) => theme.colors.bg};
    height: 100vh;
`;

export default Home;