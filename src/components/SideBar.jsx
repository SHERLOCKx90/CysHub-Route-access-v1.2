import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
gap:50px;
${'' /* border: 1px solid #fff; */}
display: flex;
flex-direction: column;
justify-content: flex-start;
box-sizing: border-box;
font-weight: normal;
font-size: 1.5rem;
${'' /* position: fixed; */}
width: 357.74px;
height: 100vh;

color: #C4B6FF;
padding: 1rem 1rem;
background: rgba(64, 59, 84, 0.4);
box-shadow: 20px 20px 100px 5px rgba(0, 0, 0, 0.5);
border-radius: 0px 50px 50px 0px;
transform: matrix(1, 0, 0, 1, 0, 0);`


const List = styled.ul`
${'' /* border: 1px solid #fff; */}
padding: 0rem 2rem;
color: #C4B6FF;`

const ListItem = styled.li`
list-style-type: none;
margin: 2rem 0rem;
color: #C4B6FF;

&:hover {
  color: white;
  cursor: pointer;
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
  font-weight: bold;
}
`
const Logo = styled.div`
${'' /* border: 1px solid #fff; */}
display: flex;
justify-content: flex-start;
padding: 0rem 1rem;
`
const Profile = styled.div`
${'' /* border: 1px solid #fff; */}
display: flex;
margin: 1rem 0rem;`

const ProfImg = styled.div`
${'' /* border: 1px solid #fff; */}
padding: 0rem 1rem;
display: flex;`

const ProfData = styled.div`
${'' /* border: 1px solid #fff; */}
padding: 0rem 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
line-height: 0.5rem;`

const Header = styled.h1`
color: #fff;
font-size: 1.5rem;
`

const Prof = styled.p`
font-weight: normal;
font-size: 1rem;
`

const Img = styled.img`
height: 70px;
width: 70px;`

const Img2 = styled.img`
height: 100px;
width: 100px;`

const SideBar = () => {
    return (
        <Container>
            <Logo>
                <Img src="../cyscom.png" alt="logo" />
            </Logo>
            <Profile>
                <ProfImg>
                    <Img2 src="../profile-img.png" alt="logo" />
                </ProfImg>
                <ProfData>
                    <Header>John Doe</Header>
                    <Prof>Web Developer</Prof>
                    <Prof>3rd Year</Prof>
                </ProfData>
            </Profile>
            <List>
                <ListItem><Link to='/' style={{textDecoration:'none', color: '#C4B6FF'}}>Home</Link></ListItem>
                <ListItem><Link to='/dashboard' style={{textDecoration:'none',color: '#C4B6FF'}}>DashBoard</Link></ListItem>
                <ListItem><Link to='/editprofile' style={{textDecoration:'none',color: '#C4B6FF'}}>Edit Profile</Link></ListItem></List>
        </Container>
    )
}

export default SideBar