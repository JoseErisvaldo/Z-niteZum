import Logo from '../Logo';
import './style.css';
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { GoGear } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import CompoCart from '../Cart';
import { useState } from 'react';


export default function Header () {
  const [cart, setCart] = useState(false);

  // Função para abrir/fechar o carrinho
  function handleCart () {
    // Alternar o estado do carrinho
    setCart(!cart);
  }

  // Função para fechar o carrinho
  function handleCloseCart() {
    setCart(false);
  }

  return(
    <div className="container-header">
      <div>
        <Logo/>
      </div>
      <div className='search-header'>
        <input className='input-search' placeholder='Pesquisar' />
        <div className='icon-input-search'>
          <CiSearch/>
        </div>
      </div>
      {/* Passando a função handleCloseCart para CompoCart */}
      <CompoCart list={cart} onClose={handleCloseCart} />
      <div>
        <ul className='dados-account'>
          {/* Ao clicar no ícone do carrinho, abrir/fechar o carrinho */}
          <li onClick={handleCart}><FiShoppingCart/></li>
          <li><IoIosNotificationsOutline/></li>
          <li><VscAccount/></li>
          <li><GoGear/></li>
        </ul>
      </div>
    </div>
  );
}
