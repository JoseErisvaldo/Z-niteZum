import { Link } from 'react-router-dom';
import './style.css'
import { FaArrowLeft } from "react-icons/fa";

export default function BtnReturn () {
  return(
    <div>
      <Link to={'/'} className="btn-return" ><FaArrowLeft/></Link>
    </div>
  )
}