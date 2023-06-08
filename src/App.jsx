import React from 'react'
import styled from 'styled-components'
import Hero from './Components/Hero.jsx'
import SideBar from './Components/SideBar.jsx'
import { createGlobalStyle } from 'styled-components'
import MainLayout from './Layout/MainLayout.jsx'
import Dashboard from './Pages/Dashboard.jsx'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  scrollbar-width: none;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  &::-webkit-scrollbar {
    display: none;
  box-sizing: border-box;
  }`


function App() {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        {/* <Container> */}
          <Hero />
        {/* </Container> */}
      </MainLayout>
    </>
  )
}

export default App
