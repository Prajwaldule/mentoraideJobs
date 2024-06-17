import styled from "styled-components"
const Container = styled.div`
    button{
      background-color: #19DD19;
    }
` 

function Button(props) {
  return (
    <Container>
        <button>
            {props.details[1]}
        </button>
    </Container>
  )
}

export default Button