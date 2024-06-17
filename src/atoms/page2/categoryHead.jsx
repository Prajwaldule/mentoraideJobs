import styled from "styled-components"
const Container = styled.div`
    span{
      color: #19DD19;
    }
`

function categoryHead() {
  return (
    <Container>
        <h1>Explore by <span>Category</span></h1>
    </Container>
  )
}

export default categoryHead