import { useSharedData } from "../../data/sharedDataContext";
import ReactSwitch from "react-switch";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  
  color:  #91DD91;
  padding: 2.5vw 0vw;
  border-radius: 5px;

  p {
    margin: 0 10px;
  }
  @media (max-width:800px){
    max-width:5vw;
    p{
        max-width: 0;
        display: none;
    }
    .switch{
        max-width: 2vw !important;
        max-height: 2vw !important;
    }
  }
  @media (max-width:420px){
   .switch{
    width:0.5vw;
   }
  }
`;

function Mode() {
    const { mode, setMode } = useSharedData();

    const toggle = () => {
        setMode(curr => !curr);
    }

    return (
        <Container mode={mode}>
            <p>Mode</p>
            <ReactSwitch className="switch" onChange={toggle} checked={mode} />
        </Container>
    );
}

export default Mode;
