import { useContext } from "react"
import { toggleContext } from "../../templates/page2/Mainhero2"
import { Link } from "react-router-dom"

import styled from "styled-components"
import { useSharedData } from "../../data/sharedDataContext"
const Container = styled.div`
.white{
  color: black;
  border: 2px solid black;
}
.black{
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

function Jobcards(props) {
    const {toggle} = useContext(toggleContext)
    const {mode} = useSharedData()
  return (
    <Container className={mode ? 'black' : 'white'}>
     {!toggle &&
     <div className="cardsContainer">
      {
        props.details.map((detail) => (
            <Link to={`/jobs/${detail.id}`}  className={`card ${mode ? 'black' : 'white'}`} key={detail.id}>
              <div className="imgntype">
                <img src={detail.img} alt='' />
                <h4>|</h4>
               <p>{detail.contract_type}</p>
               </div>
            <h3>{detail.Label}</h3>
            <p>{detail.desc}</p>
            <p>{detail.more}</p>
            </Link>
        ))
      }
     </div>} 
    </Container>
  )
}

export default Jobcards