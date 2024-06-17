 import styled from "styled-components"
const Container = styled.div`
.card{
   max-width: 10vw;
   margin: 3vw 2vw;
   padding: 1vw;
   border-radius: 0.5vw;
   h3{
    font-size: clamp(0.9rem , 1vw ,2rem);
  }
  p{
    font-size: clamp(0.5rem , 1vw ,1rem);
  }
 }
.card1{
  background-color: #FFB1CC;
}
.card2{
  background-color: #C8BBFF;
}
@media (max-width:800px){
  .card{
    max-width: 40vw;
    padding: 1vw;
    border-radius: 0.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
 }
`
function card(props) {
  return (
    <Container>
        {props.details.map( (detail) => (
            <div className={`card card${detail.id}`} key={detail.id} >
            <h3>{detail.head}</h3>
            <p>{detail.desc}</p>
            <img style={{maxWidth:'9vw',minHeight:'7vw'}} src={detail.img} alt="" />
            </div>   
        ))}
    </Container>
  )
}

export default card