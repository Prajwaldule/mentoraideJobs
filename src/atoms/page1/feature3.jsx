import img from '../../assets/job.png'
import styled from "styled-components"
const Container = styled.div`
max-width: 100vw;
display: flex; 
background-color: #D7FCE5; 
 align-items: center;
div{
  padding: 10vw ;
  h3{
    font-size: clamp(0.9rem , 1vw ,2rem);
  }
  p{
    font-size: clamp(0.5rem , 1vw ,1rem);
  }
}
`

function feature3() {
    return (
      <Container>
        <img style={{maxWidth:'30vw'}} src={img} alt=''/>
        <div>
        <h3>Filter for Fresher Jobs </h3>
        <p> A search filter that specifically allows users to find entry-level or fresher job opportunities tailored to recent graduates or those with little to no work experience.</p>
        </div>
      </Container>
    )
  }
  
  export default feature3