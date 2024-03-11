import { useParams } from "react-router-dom"

export default function CompoDetailesItem () {
  const {id} = useParams()
  return (
    <div>
      <div>{id}</div>
    </div>
  )
}