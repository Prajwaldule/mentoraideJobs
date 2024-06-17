import styled from "styled-components"
const Container = styled.div`
    span{
      color: #19DD19;
    }
`
function head() {
  return (
    <Container>
        <h1>Unlock Your Potential with <span>MentorAide</span> Exciting Career Opportunities</h1>
        <p>Stand out with an impressive resume, connect with top companies, and gain valuable insights for your professional journey</p>
    </Container>
  )
}

export default head