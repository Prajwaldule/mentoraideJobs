import Head from "../../atoms/page2/head"
import Button from '../../atoms/page2/Button'
import buttondata from "../../data/buttonData"
import img from "../../assets/image.png"
import styled from "styled-components"
import Mode from "../../atoms/page1/mode"

const Container = styled.div`
 
  display: flex;
  padding: 5vw;
 
 
`
function Hero() {
  return (
    <Container>
 
      <div>
      <Head/>
      <Button details={buttondata} />
      </div>
        <img src={img} />
        <Mode />
    </Container>
  )
}

export default Hero