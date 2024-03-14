import { Link } from 'react-router-dom';
import './style.css'
import { IoMdClose } from "react-icons/io";


export default function BtnClose ({onClick}) {
  return(
    <div>
      <button onClick={onClick}  className="btn-close" ><IoMdClose/></button>
    </div>
  )
}