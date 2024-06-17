import { useContext } from "react"
import { toggleContext } from "../../templates/page2/Mainhero2"
import { Link } from "react-router-dom"

import styled from "styled-components"
import { useSharedData } from "../../data/sharedDataContext"
const Container = styled.div`
.white{
  background-color: white;
  border: 2px solid black;
  color: black;
}
.black{
  background-color: black;
  color: white;
  border: 2px solid white;
}
.cardsContainer{
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  .card{
    margin: 2vw;
    padding: 1vw;
   
    border-radius: 0.5vw;
    
  }
  .more{
      text-decoration: double;
    }
    .imgntype{
      display: flex;
      align-items: center;
      justify-content: space-between;
      img{
        max-width: 3vw;
        max-height: 3vw;
        padding: 0vw 2vw;
      }
    }
}

` 
 

function Interncardss(props) {
    const {toggle} = useContext(toggleContext)
    const {mode} = useSharedData()
  return (
    <Container >
     {toggle &&
     <div className="cardsContainer">
      {
           props.data.map((item) => (
               <Link to={`/jobs/${item.id}`}  className={`card ${mode ? 'black' : 'white'}`} key={item.id}>
               <div className="imgntype">
                <img src={item.img} alt='' />
                <h4>|</h4>
               <p>{item.contract_type}</p>
               </div>
               <h3>{item.Label}</h3>
               <p>{item.desc}</p>
               <p className="more">{item.more}</p>
               </Link>
        ))
      }
     </div>} 
    </Container>
  )
}

export default Interncardss