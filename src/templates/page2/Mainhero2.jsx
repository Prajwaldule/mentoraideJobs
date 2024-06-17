import Hero from "../../molecules/page2/Hero"
import Cards from "../../molecules/page2/cards"
import React, { useState } from "react"
import Data from '../../data/page2_hero2data' 
import CategoryCards from "../../molecules/page2/categoryCards"
import Toggle from "../../atoms/page2/fulltime-ptime-toggle"
import Jobcards from "../../organisms/page2/jobcards"
import jobcardsData from "../../data/page2jobcards"
import InternCards from "../../data/page2internships"
export const toggleContext = React.createContext();
import Internscards from '../../organisms/page2/internscards'
import Head2 from "../../atoms/page2/head2"
import styled from "styled-components"
import CategoryHead from "../../atoms/page2/categoryHead"
import categoryData from "../../data/categorydata"
import { useSharedData } from "../../data/sharedDataContext"
 

const Container = styled.div`
  .section2{
      display: flex;
    }
  .black{
    background-color: #000000;
    color: white;
    
  }  
`
function Mainhero2() {
    const [toggle,setToggle] = useState(false)
    const { mode } = useSharedData();
  return (
    <Container>
      <div className={mode ? 'black' : 'white'}>
      <toggleContext.Provider value={{toggle,setToggle}}>
        <Hero />
        <div className="section2">
        <Head2 />
        <Cards details={Data} />
        </div>
        <CategoryHead/>
        <CategoryCards titles={categoryData} />
        <Toggle />
        <Jobcards details={jobcardsData}  /> 
        <Internscards data={InternCards}/>
    </toggleContext.Provider>
      </div>
   
    </Container>
  )
}

export default Mainhero2