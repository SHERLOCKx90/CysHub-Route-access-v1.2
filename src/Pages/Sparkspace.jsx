import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
box-sizing: border-box;

position: absolute;
width: 1028px;
height: 184px;
left: 385px;
top: 811px;

background: rgba(64, 59, 84, 0.2);
border-radius: 30px;
`
const Header=styled.h3`
border:1px solid white;
// position: absolute;
padding:1rem 2rem;
width: 152px;
height: 47px;
left: 28px;
top: 0px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 7px;
/* or 280% */


color: #FFFFFF;


`
const Desc=styled.h3`
position: absolute;

width: 339px;
height: 23px;
left: 33px;
top: 47px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 22px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: capitalize;

color: #C4B6FF;
`
const Div=styled.div`
position: absolute;
width: 432px;
height: 54px;
left: 28px;
top: 102px;

background: #FFFFFF;
border-radius: 60px;
`
const Sparkspace = () => {
    return (
        <CardContainer>
            <Header>Sparkspace</Header>
            <Desc>Post your ideas here</Desc>
           <Div>
             <input type="text" name="text" />
           </Div>
        </CardContainer>
    )
}

export default Sparkspace
