import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Card from './Card'



const Container = styled.div`
  height: max-content;
  border: 1px solid red;
  width: 100wh;
  margin: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 20px;
  overflow: hidden;
  gap:20px;
  `

const Section = styled.div`
  border: 1px solid blue;
  /* width: max-content; */
  height: max-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;`

const Lower = styled.div``
const Hero = () => {
  return (
    <Section>
      <Container>
        <Card />
        <Card />
        <Card />
      </Container>
      <Lower>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore incidunt enim, dolores architecto praesentium eos vero error, a sit, odio repellat sint quia. Inventore vero in ex placeat quisquam soluta?
      </Lower>
    </Section>


  )
}

export default Hero