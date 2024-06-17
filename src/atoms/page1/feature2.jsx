
import img from '../../assets/guide.png'
import styled from "styled-components"
import { useSharedData } from '../../data/sharedDataContext'
 
const Container = styled.div`
max-width: 100vw;
.white{
  background-color: white;
  align-items: center;
  
  display: flex;
  div{
  padding: 10vw ;
  h3{
    font-size: clamp(0.9rem , 1vw ,2rem);
  }
  p{
    font-size: clamp(0.5rem , 1vw ,1rem);
  }
}
}
.black{
  background-color: black;
  align-items: center;
  color: white;
  display: flex;
  div{
  padding: 10vw ;
  h3{
    font-size: clamp(0.9rem , 1vw ,2rem);
  }
  p{
    font-size: clamp(0.5rem , 1vw ,1rem);
  }
  
}
 
}  

`
function feature2() {
  const { mode} = useSharedData();
    return (
      <Container>
        <div className={mode ? 'black' : 'white'}>
          <div>
          <h3> 1-on-1 Career Guidance</h3>
          <p>Personalized career coaching and guidance sessions to help job seekers with resume writing, interview preparation, and career advice.</p>
          </div>
          <img style={{maxWidth:'30vw', maxHeight:'50vw'}} src={img} alt=''/>
        </div>
      </Container>
    )
  }
  
  export default feature2