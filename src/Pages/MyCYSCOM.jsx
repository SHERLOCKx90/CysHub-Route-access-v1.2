import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
box-sizing: border-box;

position: absolute;
width: 328px;
height: 726px;
left: 735px;
top: 63px;

background: rgba(64, 59, 84, 0.2);
box-shadow: 0px 15px 20px 10px rgba(0, 0, 0, 0.3);
border-radius: 20px;
`
const Header = styled.h3`

padding:0rem 3rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 45px;
/* identical to box height */

display: flex;
align-items: center;

color: #FFFFFF;
`
const Count = styled.h3`

padding:0rem 3rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 10px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: capitalize;

color: #C4B6FF;

`

const Projects= styled.div`

`

const Div1= styled.div`
padding:0rem 0rem;
`
const Div2= styled.div`

`
const Div3= styled.div`
// position: absolute;
// width:328px;
// height: 81px;
// left: 46px;
// top: 442px;

`
const Des1= styled.h3`

box-sizing: border-box;
border:1px solid white;
position: absolute;
width: 328px;
height: 150px;
left: 0px;
top: 154px;
padding:0rem 2rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
display: flex;
align-items: center;

color: #FFFFFF;
border-radius: 20px;
background: #280e57
`

const Des2= styled.h3`

box-sizing: border-box;
border:1px solid white;
position: absolute;
width: 328px;
height: 150px;
left: 0px;
top: 298px;
padding:0rem 2rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
display: flex;
align-items: center;

color: #FFFFFF;
border-radius: 20px;
background: #280e57

`

const Des3= styled.h3`
box-sizing: border-box;

border:1px solid white;
position: absolute;
width: 328px;
height: 150px;
left: 0px;
top: 442px;
padding:0rem 2rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
display: flex;
align-items: center;

color: #FFFFFF;
border-radius: 20px;
background: #280e57
`

const MyCYSCOM = () => {
    return (
        <CardContainer>
            <Header>My CYSCOM</Header>
            <Count>Projects</Count>
            <Projects>
            <Div1>
                <Des1>Ethical Hacking Project</Des1>
            </Div1>
           
            <Div2>
                <Des2>CYSCOM Event Site Project</Des2>
            </Div2>
           
            <Div3>
                <Des3>CYSCOM Timeline Updation</Des3>
            </Div3>
            </Projects>

           
        </CardContainer>
    )
}

export default MyCYSCOM
