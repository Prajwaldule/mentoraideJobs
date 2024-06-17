import styled from "styled-components"
const Container = styled.div`
padding: 5vw;
max-width: 30vw;
    .contact{
      color: #19DD19;
    }
`
function head2() {
  return (
    <Container>
        <h2>How we work</h2>
        <p>Transformative careers through meaningful work experiences. Explore internships and careers.</p>
        <p className="contact">Get in touch with us</p>
    </Container>
  )
}

export default head2