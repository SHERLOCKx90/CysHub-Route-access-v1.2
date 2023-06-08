import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const Container = styled.div`
border: 1px solid red;
width: max-content;
height: max-content;
display: grid;
justify-content: center;
align-items: center;
padding: 20px;`
const Cards = () => {
    return (
        <Card />
    )
}

export default Cards