import React, { useState } from "react"
import Searchbar from "../../molecules/page1/searchbar"
import InternshipDetail from "../../organisms/page3/internshipDetail"
import Joblist from "../../organisms/page3/joblist"
import AlljobCards from "../../data/alljobData"
import Latestcards1 from "../../organisms/page3/latestcards1"
import Latestcards2 from "../../organisms/page3/latestcards2"
import LatestHead from "../../atoms/page3/latestHead"
import styled from "styled-components"
import { useSharedData } from "../../data/sharedDataContext"
import Mode from "../../atoms/page1/mode"
const Container = styled.div`
 
.sections{
  display: flex;
  margin:0vw 5vw;
  width: 90vw;
 }
 .latestjobs{
 max-width: 100vw;
  background-color: #05180C;
 }
 .white{
  color: black;
  background-color: white;
 }
 .black{
  background-color: black;
  color: white;

 }
  
 @media (max-width:500px){
   .sections{
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
   }
   .mode{
     position: relative;
    left:80vw;
    padding: 5vw 0vw;
   }
   .sec1{
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center
    align-content: center;
    flex-wrap: nowrap;
    align-items: center;
   }
   .sections{
    margin: 0;
   }
   .sec2{
    width: 80vw;
   padding: 0vw 10vw;
   }
 }
 @media (max-width:1025px) {
    width:100vw;
 }
 
` 
export const detailContext = React.createContext();
function Mainpage3() {
  const [intern , setIntern] = useState(null)
  const {mode} = useSharedData();
  return (
    <Container>
      <div className={mode ? 'black' : 'white'}>
      <detailContext.Provider value={{AlljobCards, intern, setIntern}}>
      <div className="sections">
      <div className="sec1">
      <Searchbar />
      <Joblist />
      </div>
      <div className="sec2">
      <InternshipDetail />  
      </div>  
      <div className="mode">
      <Mode />
      </div>
    
      </div>
      <LatestHead />
      <div className="latestjobs">
      <Latestcards1 />    
      <Latestcards2 />
      </div>
    </detailContext.Provider>
      </div>
    </Container>
  )
}

export default Mainpage3