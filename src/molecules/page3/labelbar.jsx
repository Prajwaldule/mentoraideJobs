 
import styled from "styled-components"
const Container = styled.div`
  display:flex;
  align-items: center;
  
  h3,p,button{
    margin: 2vw;
  }
  button{
 background-color: #19DD19;
 font-size: clamp(0.5rem , 1.5vw ,1rem);
  }
  h3{
 font-size: clamp(0.9rem , 1.5vw ,1rem);
  }
  p{
 font-size: clamp(0.7rem , 1.5vw ,1rem);

  }
 
 
` 
function labelbar(props) {
  return (
    <Container>
        <h3>{props.details}</h3>
        <p>{props.details2}</p>
        <button>View Company</button>
        <button>Apply Now</button>
    </Container>
  )
}

export default labelbar