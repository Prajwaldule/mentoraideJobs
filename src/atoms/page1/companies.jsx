 
import styled from "styled-components"
const Container = styled.div`
display: flex; 
align-items : center ;
justify-content: center;

.list{
  padding: 1vw;
}
`
function companies(props) {
  return (
    <Container>
      {props.details.map((detail , index) => (
        <div  className="list" key={index}>
            <img style={{maxHeight:'2vw',maxWidth:'7vw'}} src={detail.img} alt={detail.name}/>
        </div>    
      ))}
      <h4> + 50 more</h4>
    </Container>
  )
}

export default companies