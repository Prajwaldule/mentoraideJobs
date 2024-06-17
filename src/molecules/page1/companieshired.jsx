import Companyhead from "../../atoms/page1/Companyhead"
import Companies from "../../atoms/page1/companies"
import Companylist from "../../data/comapanylist"
import styled from "styled-components"
const Container = styled.div`

`
 

function companieshired() {
  return (
    <div>
        <Companyhead/>
        <Companies details={Companylist} />
    </div>
  )
}

export default companieshired