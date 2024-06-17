import Hero from "../../molecules/page1/Hero" 
import Cards from "../../organisms/page1/cards"
import Card2 from "../../molecules/page1/card2"
import Searchbar from "../../molecules/page1/searchbar"
import styled from "styled-components"
import Mode from "../../atoms/page1/mode"

const Container = styled.div`
width:100vw ;
display: flex;
background-color: black;
 
.main{
  display: flex;
  align-items: center;
}
.cards{
  display: flex;
  justify-content: center;
}
 @media (max-width:450px){  
 width: 100vw;
 display: flex;
 justify-content: center;
  .cards{
    display: flex;
  }
  .main{
    display: flex;
    flex-direction: column;
  }
  .hero{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
 }
 @media (max-width:769px){
  width: 100vw;
  display: flex;
  justify-content: center;
 }
 @media (max-width:769px){
  .main{
    width: 65vw;
  }
   .hero{
    width: 50vw;
   }
   .side{
    max-width: 2vw;
   }
 }
`
function Mainhero() {
  return (
    <Container>
      <div className="main">
      <div className="hero">
      <Hero />
      <Searchbar />
      </div>  
      <div className="cards">
      <Cards />
      <Card2 />
      </div>     
       
      </div>
        <div className="side">
        <Mode />
        </div>
     
    </Container>
  )
}

export default Mainhero