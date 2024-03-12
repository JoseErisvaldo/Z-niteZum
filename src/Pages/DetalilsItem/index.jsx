import { useParams } from "react-router-dom"
import CompoDetailesItem from "../../Components/CompoDetailsItem"
import ItemQuestions from "../../Components/CompoDetailsItem/ItemQuestions"

export default function DetailesItem () {
  return (
    <div>
      <div>
        <CompoDetailesItem/>
        <ItemQuestions/>
      </div>
      
    </div>
  )
}