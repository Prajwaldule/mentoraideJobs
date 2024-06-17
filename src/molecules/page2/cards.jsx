import styled from "styled-components"
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
     
.card{
    margin:5vw;  
    h4{
      max-width: fit-content;
      border-radius: 0.2vw;
      padding:0.2vw;
      background-color: #19DD19;
    }
  }
`

function cards(props) {
  return (
    <Container>
        {props.details.map( (detail,index) => (
            <div className="card" key={index}>
            <h4>{detail.number}</h4>
            <h3>{detail.name}</h3>
            <p>{detail.desc}</p>
            </div>
        ))}
    </Container>
  )
}

export default cards