import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
box-sizing: border-box;

position: absolute;
width: 332px;
height: 409px;
left: 385px;
top: 380px;

background: rgba(64, 59, 84, 0.2);
box-shadow: 0px 15px 20px 10px rgba(0, 0, 0, 0.3);
border-radius: 20px;
`

// const Meter=styled.div`
// position: absolute;
// width: 207.14px;
// height: 200px;
// left: 265.57px;
// top: 49.43px;

// transform: rotate(90deg);`

const Tot=styled.div`
position: absolute;
width: 121px;
height: 60px;
left: 105px;
top: 123px;

font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 40px;
line-height: 60px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: capitalize;

color: #FFFFFF;
`

const Text=styled.div`
position: absolute;
width: 148px;
height: 60px;
left: 192px;
top: 197px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
display: flex;
align-items: center;
text-transform: capitalize;

color: #C4B6FF;
`
const PH=styled.h4`
position: absolute;
width: 105px;
height: 23px;
left: 37px;
top: 280px;

font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 15px;
line-height: 22px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: capitalize;

color: #8B6DFF;
`
const Val1=styled.h4`
border:solid 1px white;
position: absolute;
width: 63px;
height: 90px;
left: 37px;
top: 235px;
// padding:0rem 2rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 60px;
line-height: 90px;
//  line-height: 560px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: capitalize;

color: #FFFFFF;

`
const EV=styled.h4`
position: absolute;
width: 93px;
height: 23px;
left: 192px;
top: 280px;

font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 15px;
line-height: 22px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: capitalize;

color: #8B6DFF;

`
const Val2=styled.h4`
border:solid 1px white;
position: absolute;
width: 40px;
height: 90px;
left: 187px;
top: 235px;
//  padding:0rem 11.7rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 60px;
line-height: 90px;
// line-height: 560px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: capitalize;

color: #FFFFFF;

`

const Workhours = () => {
    return (
        <CardContainer>
            {/* <Meter></Meter> */}
            <Tot>20/40</Tot>
            <Text>Total work hours spent</Text>
           <PH>Project Hours</PH>
           <Val1>15</Val1>
           <EV>Event Hours</EV>
           <Val2>5</Val2>
        </CardContainer>
    )
}

export default Workhours