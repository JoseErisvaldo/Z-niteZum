import './style.css'
export default function BtnSubmit ({submit,onClick}) {
  return(
    <div>
      <button onClick={onClick} className="btn-submit" >{submit}</button>
    </div>
  )
}