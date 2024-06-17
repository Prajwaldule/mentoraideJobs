 import styled from "styled-components"
const Container = styled.div`
max-width: 30vw;
p{
    font-size: clamp(0.5rem , 1vw ,1rem);
}
color: white;
`
function desc() {
  return (
    <Container>
        <p>Hand-picked opportunities to work from home, remotely, freelance, full-time, part-time, contract and internships.</p>
    </Container>
  )
}

export default desc