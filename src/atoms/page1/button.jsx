import styled from "styled-components"
const Container = styled.div`
  button{
    border-radius: 0vw 0.5vw 0.5vw 0vw;
    color: white;
    background-color: #19dd19;
    
 }
 @media (max-width:425px){
   button{
    height:6vw ;
   }
  }
 
`
function button(props) {
  return (
    <Container>
        <button>
            {props.details[0]}
        </button>
    </Container>
  )
}

export default button