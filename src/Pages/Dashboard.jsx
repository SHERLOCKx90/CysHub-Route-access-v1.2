import React from 'react'
import TotEvents from './totevents'
import styled from 'styled-components'
import TotProject from './TotProject'
import MyCYSCOM from './MyCYSCOM'
import Contribution from './Contribution'
import Workhours from './Workhours'
import Sparkspace from './Sparkspace'
import MainLayout from '../Layout/MainLayout'


const Container = styled.div`
display:grid;
gap:10px;
`

const Dashboard = () => {
  return (
    <MainLayout>
      <Container>
        <Contribution />
        <Workhours />
        <MyCYSCOM />
        <TotProject />
        <TotEvents />
        <Sparkspace />
      </Container>
    </MainLayout>

  )
}

export default Dashboard
