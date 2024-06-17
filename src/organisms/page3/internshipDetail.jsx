import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import Labelbar from "../../molecules/page3/labelbar"
import { detailContext } from "../../templates/page3/Mainpage3"

import styled from "styled-components"
import { useSharedData } from "../../data/sharedDataContext"
const Container = styled.div`
 .label{
  display: flex;
 }
 .desc{
  padding:5vw;
  border-radius: 2vw;
 }
 .white{
  background-color: #d8e9f6;
 }
 .black{
  background-color: #626b70;
 }
 @media (max-width:500px) {
    
 }
` 
function InternshipDetail() {
    const { id } = useParams()
    const {intern , setIntern, AlljobCards} = useContext(detailContext)
    const {mode} = useSharedData()
    useEffect(() => {
     
    const fetchedInterndata = AlljobCards.find(item => item.id === id)
    setIntern(fetchedInterndata)
    }, [id, AlljobCards, setIntern])

    if (!intern) return <div>Loading...</div>
  return (
    <Container>
      <div className="label">
      <Labelbar details={intern.Label} details2={intern.contract_type} />
      </div>
      <div className={`desc ${mode ? 'black' : 'white'}`}>
      <div className="sdetail">
       <h4>Minimum Qualification:</h4><p> ${intern.minimum_qualification}</p> 
       </div>
       <div className="sdetail">
       <h4>Experience Level:</h4><p> ${intern.experience_level}</p> 
       </div>
       <div className="sdetail">
       <h4>Experience Length:</h4><p> ${intern.experience_length}</p> 
       </div>
       <div className="sdetail">
       <h4>Location:</h4><p> ${intern.location}</p> 
       </div>
       <div className="sdetail">
       <h4>Application Deadline:</h4><p> ${intern.application_deadline}</p> 
       </div>
       <div className="sdetail">
       <h4>Salary Range:</h4><p> ${intern.salary}</p> 
       </div>
       <div className="ldetail">
       <h4>Job Description:</h4><p> ${intern.job_description}</p> 
       </div> 
       <div className="ldetail"> 
       <h4>Job Requirements:</h4><p> ${intern.requirements}</p> 
       </div> 
       <div className="ldetail">
       <h4>Job Responsibilities:</h4><p> ${intern.responsibilities}</p> 
       </div>
      </div>
      
    </Container>
  )
}

export default InternshipDetail