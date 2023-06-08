import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
box-sizing: border-box;

position: absolute;
width: 332px;
height: 301px;
left: 385px;
top: 63px;

background: rgba(64, 59, 84, 0.5);
box-shadow: 0px 15px 20px 10px rgba(0, 0, 0, 0.3);
border-radius: 20px;
`
const Header=styled.h3`



padding: 0rem 3rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 45px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: capitalize;

color: #FFFFFF;
`
const Value=styled.h1`



padding: 0rem 3rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 0px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: capitalize;

color: #C4B6FF;
`
const Bar1=styled.div`
position: absolute;
width: 9px;
height: 118px;
left: 35px;
top: 152px;

background: #090909;
border-radius: 20px;

`
const Div1=styled.div`
position:relative;
width: 9px;
height: 88px;
left: 0px;
top: 30px;

background: #8B6DFF;
border-radius: 20px;`

const Bar2=styled.div`
position: absolute;
width: 9px;
height: 118px;
left: 63px;
top: 152px;

background: #090909;
border-radius: 20px;`

const Div2=styled.div`
position:absolute;
width: 9px;
height: 47px;
left: px;
top: 71px;

background: #8B6DFF;
border-radius: 20px;`
const Bar3=styled.div`
position: absolute;
width: 9px;
height: 118px;
left: 91px;
top: 152px;

background: #090909;
border-radius: 20px;
`

const Div3=styled.div`
position:absolute;
width: 9px;
height: 92px;
left: px;
top: 26px;

background: #8B6DFF;
border-radius: 20px;`
const Bar4=styled.div`
position: absolute;
width: 9px;
height: 118px;
left: 119px;
top: 152px;

background: #090909;
border-radius: 20px;
`
const Div4=styled.div`
position:absolute;
width: 9px;
height: 76px;
left: px;
top: 42px;

background: #8B6DFF;
border-radius: 20px;`

const Bar5=styled.div`
position: absolute;
width: 9px;
height: 118px;
left: 148px;
top: 152px;

background: #090909;
border-radius: 20px;
`
const Div5=styled.div`
position:absolute;
width: 9px;
height: 107px;
left: px;
top: 11px;

background: #8B6DFF;
border-radius: 20px;`
const Bar6=styled.div`
position: absolute;
width: 9px;
height: 118px;
left: 176px;
top: 152px;

background: #090909;
border-radius: 20px;
`
const Div6=styled.div`
position:absolute;
width: 9px;
height: 39px;
left: px;
top: 79px;

background: #8B6DFF;
border-radius: 20px;`
const Bar7=styled.div`
position: absolute;
width: 9px;
height: 118px;
left: 204px;
top: 152px;

background: #090909;
border-radius: 20px;
`
const Div7=styled.div`
position:absolute;
width: 9px;
height: 65px;
left: px;
top: 53px;

background: #8B6DFF;
border-radius: 20px;`
const Bar8=styled.div`
position: absolute;
width: 9px;
height: 118px;
left: 232px;
top: 152px;

background: #090909;
border-radius: 20px;
`

const Div8=styled.div`
position:absolute;
width: 9px;
height: 73px;
left: px;
top: 45px;

background: #8B6DFF;
border-radius: 20px;`
const Bar9=styled.div`
position: absolute;
width: 9px;
height: 118px;
left: 260px;
top: 152px;

background: #090909;
border-radius: 20px;`

const Div9=styled.div`
position:absolute;
width: 9px;
height: 23px;
left: px;
top: 95px;

background: #8B6DFF;
border-radius: 20px;`
const Bar10=styled.div`
position: absolute;
width: 9px;
height: 118px;
left: 289px;
top: 152px;

background: #090909;
border-radius: 20px;`

const Div10=styled.div`
position:absolute;
width: 9px;
height: 85px;
left: px;
top: 33px;

background: #8B6DFF;
border-radius: 20px;`


const Contribution = () => {
    return (
        <CardContainer>
            <Header>Contribution</Header>
            <Value>Graph</Value>
            <Bar1><Div1></Div1></Bar1>
            <Bar2><Div2></Div2></Bar2>
            <Bar3><Div3></Div3></Bar3>
            <Bar4><Div4></Div4></Bar4>
            <Bar5><Div5></Div5></Bar5>
            <Bar6><Div6></Div6></Bar6>
            <Bar7><Div7></Div7></Bar7>
            <Bar8><Div8></Div8></Bar8>
            <Bar9><Div9></Div9></Bar9>
            <Bar10><Div10></Div10></Bar10>

            
        </CardContainer>
    )
}

export default Contribution
