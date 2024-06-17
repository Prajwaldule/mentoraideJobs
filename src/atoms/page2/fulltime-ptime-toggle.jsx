import { useContext} from "react" 
import { toggleContext } from "../../templates/page2/Mainhero2"

import styled from "styled-components"
const Container = styled.div`
.ftime-clicked{
  background-color: #19DD19;
  border-radius: 0.5vw 0vw 0vw 0.5vw; 
}
.ptime-clicked{
  background-color: #19DD19;
  border-radius: 0vw 0.5vw 0.5vw 0vw; 
}
.ftime-idle{
  border-radius: 0.5vw 0vw 0vw 0.5vw; 
}
.ptime-idle{
  border-radius: 0vw 0.5vw 0.5vw 0vw; 
}

 
` 
function Toggle() {
    const {toggle , setToggle} = useContext(toggleContext)
 
  return (
    <Container>
   <button onClick={() => setToggle(false)} className={!toggle? 'ftime-clicked':'ftime-idle'} >Full-Time</button>
   <button onClick={() => setToggle(true)} className={toggle? 'ptime-clicked':'ptime-idle'} >Part-Time</button>
    </Container>
  )
}

export default Toggle