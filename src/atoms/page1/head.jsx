 import styled from "styled-components"
const Container = styled.div`
max-width: 30vw;
color: white;
 
h1{
  font-size: clamp(1rem , 2vw ,2.5rem);
}

span{
  color:#19dd19;
}
@media (max-width:325px){
    h2{
      max-height: 10vh;
    }
 }
`
function head() {
  return (
    <Container>
      <h1> Find A <span> Job </span>That  <span>Matches</span> Your Passion   </h1>  
    </Container>
  )
}

export default head