 import styled from "styled-components"
const Container = styled.div`
padding: 0vw 2vw;
text-align: center;
h2{
    font-size: clamp(1.5rem , 2vw ,2rem);
  }
  span{
    color: #19DD19;
  }
  @media (max-width:800px){
    h2{
      font-size: clamp(1rem , 1.5vw ,1.5rem);
    }
  }
`
function Companyhead() {
  return (
    <Container>
        <h2>Top Tech Companies Hire <span>Our Students</span></h2>
    </Container>
  )
}

export default Companyhead