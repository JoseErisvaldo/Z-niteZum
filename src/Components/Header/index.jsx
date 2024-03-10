import Logo from '../Logo'
import './style.css'
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { GoGear } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Header () {
  return(
    <div className="container-header">
      <div>
        <Logo/>
      </div>
      <div className='search-header'>
        <input className='input-search' placeholder='Pequisar' />
        <div className='icon-input-search'>
          <CiSearch/>
        </div>
      </div>
      <div>
        <ul className='dados-account'>
          <li><IoIosNotificationsOutline/></li>
          <li><VscAccount/></li>
          <li><GoGear/></li>
        </ul>
      </div>
    </div>
  )
}