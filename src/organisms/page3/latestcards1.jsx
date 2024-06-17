import { useContext } from "react";
import { detailContext } from "../../templates/page3/Mainpage3";
import styled from "styled-components";
import { useSharedData } from "../../data/sharedDataContext";

const Container = styled.div`
    display: flex;
    overflow: hidden;
    width: 100vw;
  .cards{
    animation: 30s slide infinite linear;
  }

  .cardWrapper{
    @keyframes slide {
        from{
            transform:translateX(0)
        }
        to{
            transform:translateX(-100%)
        }
    }
    white-space: nowrap;
 
  }

  .card {
    display: inline-block; /* Treat each card as an inline block to keep it within the horizontal flow */
    width: 20vw;
    height: 17vw; /* Adjust width as needed */
    padding: 2vw;
    margin: 1vw 1vw 0vw 1vw;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
  }

  .top {
    display: flex;
    justify-content: space-between; /* Distribute space between sections */
    border-bottom: 1px solid #ddd; /* Add a border between sections */
    padding-bottom: 0.5rem; /* Add padding for separation */
 
  }

  .sec1 {
    flex: 1; /* Evenly distribute space among the sections */
    text-align: center; /* Center text within each section */
    padding: 0 0.5rem; /* Add padding to each section */   
  }
  .border{
    border-right: 2px solid black; 

  }

  .mid {
    display: flex;
    justify-content: space-evenly;
    margin: 1rem 0;
    text-align: center;
    font-weight: bold; /* Highlight the job label */
  }

  .btm {
    display: flex;
    justify-content: space-between; /* Space between location and more details */
  }
  .card p{
   font-size: clamp(0.5rem, 1vw, 0.8rem);
  }
  .desc{
     padding: 1vw;
     overflow: hidden;
     text-overflow: ellipsis;
  }
  .white{
    color: black;
    border: 2px solid black;
    
  }
  .black{
    color: white;
    background-color: black;
    border: 2px solid white;
  }
 @media (max-width:800px){
    .mid img{
      width: 4vw;
      height:4vw;
    }
    p{
        font-size: clamp(1rem , 2vw ,2rem);
    }
    .card{
        width: 30vw;
        height: 25vw;
    }
 }
 @media (max-width:500px){
 
    .card{
        width: 50vw;
        height: 40vw;
    }
 } 
 @media (max-width:376px){
 
 .card{
     width: 60vw;
     height: 45vw;
 }
} 
@media (max-width:321px){
 
 .card{
     width: 70vw;
     height: 55vw;
 }
} 

@media (max-width:1025px){
 
 .card{
     width: 30vw;
     height: 25vw;
 }
} 
 
`

function Latestcards1() {
  const { AlljobCards } = useContext(detailContext);
   
 const {mode} = useSharedData()
  return (
    <Container>
      <div className="cards">
        <div className="cardWrapper">
          {AlljobCards.map((detail) => (
            <div className={`card ${mode ? 'black' : 'white'}`} key={detail.id}>
              <div className="top">
                <div className="sec1 border">
                  <p>Apply Before</p>
                  <p>{detail.application_deadline}</p>
                </div>
                <div className="sec1 border">
                  <p>Job Type</p>
                  <p>{detail.contract_type}</p>
                </div>
                <div className="sec1">
                  <p>Expected Salary</p>
                  <p>{detail.salary}</p>
                </div>
              </div>
              <div className="mid">
                <img src={detail.img} alt="" />
                <p>{detail.Label}</p>
              </div>
              <p className="desc">{detail.desc}</p>
              <div className="btm">
                <p>{detail.location}</p>
                <p>{detail.more}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cards">
        <div className="cardWrapper">
          {AlljobCards.map((detail) => (
            <div className={`card ${mode ? 'black' : 'white'}`} key={detail.id}>
              <div className="top">
                <div className="sec1">
                  <p>Apply Before</p>
                  <p>{detail.application_deadline}</p>
                </div>
                <div className="sec1">
                  <p>Job Type</p>
                  <p>{detail.contract_type}</p>
                </div>
                <div className="sec1">
                  <p>Expected Salary</p>
                  <p>{detail.salary}</p>
                </div>
              </div>
              <div className="mid">
                <img src={detail.img} alt="" />
                <p>{detail.Label}</p>
              </div>
              <p className="desc">{detail.desc}</p>
              <div className="btm">
                <p>{detail.location}</p>
                <p>{detail.more}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Latestcards1;
