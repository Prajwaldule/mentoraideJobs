import cardsData from "../../data/cardsPage1Data"
import Card from "../../molecules/page1/card"
 

function cards() {
  return (
    <div>
        <Card details={cardsData} />
    </div>
  )
}

export default cards