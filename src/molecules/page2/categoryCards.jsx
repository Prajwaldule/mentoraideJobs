import categoryData from "../../data/categorydata";
import styled from "styled-components"
import { useSharedData } from "../../data/sharedDataContext";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4 , 1fr);
  .black{
   color: white;
   border: 2px solid white;
  }
  .white{
    color: black;
    border: 2px solid black;
  }
.card{
  margin: 4vw;
  padding: 0.5vw;
  display: flex;
  align-items: center;
  border-radius: 0.5vw;
    img{
      max-width: 3vw;
      max-height: 3vw;
      padding: 1vw;
    }
}
`



function categoryCards() {
  const {mode} = useSharedData()
 
  return (
    <Container> 
       {categoryData.map( (title,index) => (
            <div className={`card ${mode ? 'black' : 'white'}`}key={index}>
               
              <img src={title.icon} alt='' /> 
                
              <div>
              <h4>{title.label}</h4>
              <p>{title.jobs_avail}</p>
              </div>
               
            </div>
        ))}
    </Container>
  )
}

export default categoryCards