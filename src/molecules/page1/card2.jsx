 import {Link} from 'react-router-dom'
 import styled from "styled-components"
 import Rect3 from "../../assets/Rectangle3.png";
const Container = styled.div`
.card{
  background-color: #9EDCA6;
  max-width: 15vw;
  min-height: 31.5vw;
  margin: 3vw 2vw;
  padding: 2vw;
  border-radius: 0.5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
  h3{
    font-size: clamp(0.9rem , 1vw ,2rem);
  }
  p{
    font-size: clamp(0.5rem , 1vw ,1rem);
  }
}
@media (max-width:800px){
 
  .card{
    max-width:60vw;
    min-height:80% ;
    padding: 1vw;
    border-radius: 0.5vw;
    

  }
 }
`
function card2() {
  return (
    <Container>
 <Link to='/jobs'>
    <div className="card">
      <div>
      <h3>Jobs & Internships</h3>
      <p>Discover Varied Career Paths</p>
      </div>
        <img style={{width:'17vw',height:'20vw'}} src={Rect3} alt=''/>
    </div>
    </Link>
    </Container>
   
  )
}

export default card2