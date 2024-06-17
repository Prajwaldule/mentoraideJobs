import Button from "../../atoms/page1/button"
import Searchinput from "../../atoms/page1/searchinput"
import buttondata from "../../data/buttonData"
import styled from "styled-components"
const Container = styled.div`
display: flex;
margin:2vw 0vw;
min-height: 2.5vw;
@media (max-width:425px){
    max-width: 20vw;
    padding: 1vw;
    border-radius: 0.5vw;
    margin: 3vw 2vw;

 }
`
 
function searchbar() {
  return (
    <Container>
       <Searchinput/>  
    </Container>
  )
}

export default searchbar