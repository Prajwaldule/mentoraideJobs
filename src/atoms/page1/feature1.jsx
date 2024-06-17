 import img from "../../assets/ats.png"
import styled from "styled-components"
const Container = styled.div`
display: flex;
max-width: 100vw;
background-color: #D7FCE5;
align-items: center;

div{
  padding: 10vw;
  h3{
    font-size: clamp(0.9rem , 1vw ,2rem);
  }
  p{
    font-size: clamp(0.5rem , 1vw ,1rem);
  }
}
`
function feature1() {
  return (
    <Container>
        <img style={{maxWidth:'40vw', maxHeight:'60vw'}} src={img}/>
        <div>
        <h3>Resume ATS Checker</h3>
        <p>Check your resume with ease for compliance with Applicant Tracking System criteria, ensuring they are optimized for better visibility to recruiters.</p>
        </div>
       
    </Container>
  )
}

export default feature1