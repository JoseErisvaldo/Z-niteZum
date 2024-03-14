import { useEffect, useState } from 'react';
import BtnClose from '../Btns/BntClose'
import './style.css'
import BtnSubmit from '../Btns/BtnSubmit';

export default function CompoCart ({ list, onClose }) {
  const [local, setLocal] = useState([]);

  useEffect(() => {
    let currentCart = JSON.parse(localStorage.getItem('@cartZeniteZum')) || [];
    setLocal(currentCart);
  }, []);

  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = local.map(item => {
      if (item.id === itemId) {
        item.quantity -= 1;
      }
      return item
    }).filter(item => item.quantity > 0);
    setLocal(updatedCart);
    localStorage.setItem('@cartZeniteZum', JSON.stringify(updatedCart));
  }

  const handleIncrementQuantity = (itemId) => {
    const updatedCart = local.map(item => {
      if (item.id === itemId) {
        item.quantity += 1;
      }
      return item
    });
    setLocal(updatedCart);
    localStorage.setItem('@cartZeniteZum', JSON.stringify(updatedCart));
  }

  const handleRemoveItem = (itemId) => {
    const updatedCart = local.filter(item => item.id !== itemId);
    setLocal(updatedCart);
    localStorage.setItem('@cartZeniteZum', JSON.stringify(updatedCart));
  }

  let sumLocalDiscount = local.reduce((total, item) => {
    if (item.quantity > 0) {
      return total + (item.price * item.quantity)
    } else {
      return total
    }
  }, 0);

  let sumLocalOriginal = local.reduce((total, item) => {
    if (item.quantity > 0) {
      return total + (item.original_price * item.quantity)
    } else {
      return total
    }
  }, 0);

  const handleClose = () => {
    onClose(false);
  }

  return (
    <>
      {list && (
        <div className="card-cart">
          <div className='card-title-cart'>
            <BtnClose onClick={handleClose}/>
          </div>
          {local.map((item) => (
            <div className='dados-cart' key={item.id}>
              <div className='img-cart'><img src={item.img}/></div>
              <div className='title-cart'>{item.title}</div>
              <div className='original-price-cart'>R$ {item.original_price}</div>
              <div className='price-cart'>R$ {item.price}</div>
              <div className='card-qtd-cart'>
                <div className='decrease' onClick={() => handleDecreaseQuantity(item.id)}>-</div>
                <div className='qtd-cart'>{item.quantity}</div>
                <div className='increment-cart' onClick={() => handleIncrementQuantity(item.id)}>+</div>
              </div>
            </div>
          ))}
          {local.length > 0 ?
           <>
            <div className='total-cart'>
            <span>Total</span>
            <span className='original-price-cart'>R$ {sumLocalOriginal}</span>
            <span  className='price-cart'>R$ {sumLocalDiscount}</span>
          </div>
          <div className='cart-btn-finalizar'>
            <div>Continuar a compra</div>
          </div>
           </> 
           : 
           <div className='cart-status'>Carrinho Vazio !!</div>}
          
        </div>
      )}
    </>
  )
}
