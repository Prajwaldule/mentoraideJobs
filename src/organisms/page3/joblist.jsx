import { useContext } from "react"
import { detailContext } from "../../templates/page3/Mainpage3"
import styled from "styled-components"
import { useSharedData } from "../../data/sharedDataContext"
const Container = styled.div`
  .card{
    margin: 2vw;
    padding: 1vw;
    border: 2px solid black;
    border-radius: 0.5vw;
    width:20vw;
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
.black{
  color: white;
  border: 2px solid white;
}
.white{
  color: black;
  border: 2px solid black;
}
@media (max-width:430px){
  width:100vw;
  .wrap{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }

   .card{
    width: 60vw;
    border-radius: 2vw; 
   }
 }
` 
function Joblist() {
   const {AlljobCards} = useContext(detailContext)
   const fiveCards = AlljobCards.slice(0,6) 
   const {mode} = useSharedData()
  return (
    <Container>
        <div className="wrap">
        {fiveCards.map((detail) => (
            <div className={`card ${mode ? 'black' : 'white'}`} key={detail.id}>
           <div className="imgntype">
                <img src={detail.img} alt='' />
                <h4>|</h4>
               <p>{detail.contract_type}</p>
               </div>
            <h3>{detail.Label}</h3>
            <p>{detail.desc}</p>
            <p className="more">{detail.more}</p>
            </div>  
        ))} 
         </div>
    </Container>
  )
}

export default Joblist