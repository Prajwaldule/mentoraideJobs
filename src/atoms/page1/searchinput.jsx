 import styled from "styled-components"
const Container = styled.div`
 
input{
  border-radius: 0.5vw 0vw 0vw 0.5vw;
  padding:1vw 2vw
  
}
.btnnn{
  border-radius: 0vw 0.5vw 0.5vw 0vw;
  padding:1vw 2vw;
  background-color: #19DD19;
}
.box{
  min-height: 5vw;
}
@media (max-width:425px){
  
}
`

function searchinput() {
  return (
    <Container>
        <input type='text' placeholder="Search by Job Type" id="box" />
        <label htmlFor="box">  
          <button className="btnnn">
        Search
        </button></label>
    </Container>
  )
}

export default searchinput