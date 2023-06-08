import React, { Children } from 'react';
import SideBar from '../Components/SideBar.jsx';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: black;
    color: white;
    font-family: 'Poppins', sans-serif;`
    
// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
    return (
        <Container>
            <SideBar />
            <div>{children}</div>
        </Container>
    )
}

export default MainLayout