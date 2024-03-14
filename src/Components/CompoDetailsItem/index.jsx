import { useParams } from "react-router-dom";
import './style.css';
import api from "../../Services";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import BtnSubmit from "../Btns/BtnSubmit";
import BtnReturn from "../Btns/BtnReturn";


export default function CompoDetailesItem() {
  const { id } = useParams()
  const [detailsItemBd, setDetailsItemBd] = useState([])
  const [thumbnail, setThumbnail] = useState([])
  const [cart, setCart] = useState()

  async function fetchData() {
    try {
      const response = await api.get(`/items/${id}`)
      setDetailsItemBd(response.data)
      if (response.data && response.data.pictures) {
        const img = response.data.pictures
        const slice = img.slice(0,6)
        setThumbnail(slice)
      }
    } catch (error) {
      console.error("Error data:", error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]); 

 function handleAddCart(e, productData) {
  let currentCart = JSON.parse(localStorage.getItem('@cartZeniteZum'));

  if (!Array.isArray(currentCart)) {
    currentCart = [];
  }

  let found = false;
  for (let i = 0; i < currentCart.length; i++) {
    console.log(currentCart[i].id)
    if (currentCart[i].id === productData.id) {
      alert('Item ja consta no carrinho !')
      found = true;
      break;
    }
  }

  if (!found) {
    productData.quantity = productData.quantity || 1;
    console.log(currentCart)
    currentCart.push(productData);
      alert('Item adicionado ao carrinho !!')
  }

  localStorage.setItem('@cartZeniteZum', JSON.stringify(currentCart));

}



  return (
    <div>
      <div className="container-details-item">
        <BtnReturn/>
        <div className="card-details-item">
          <div className="thumbnail-details-item">
            {thumbnail && thumbnail.map((item, index) => (
              <img key={index} src={item.url} alt={`Thumbnail ${index + 1}`} />
            ))}
          </div>
          <div className="main-image-details-item">
            <img src={detailsItemBd.thumbnail} alt="Main Image" />
          </div>
        </div>
        <div className="product-info-details-item">
          <h3>{detailsItemBd.title}</h3>
          <p className="price-details-item"></p>
           <p className="original-price-details-item">R$ {detailsItemBd.original_price}</p>
          <p className="price-details-item">R$ {detailsItemBd.price}</p>
          <p className="portion-details-item">ou 12x {(detailsItemBd.original_price / 12).toFixed(2)}</p>
          <h2 className="stock-full-details-item">Estoque FULL <span className="icon-full-details-item"><FaCheck/></span></h2>
          <p>Disponível: {detailsItemBd.initial_quantity}</p>
          <p>
            <div className="frete-details-item">
              <span>Envio para todo o país</span>
              <span>Saiba os prazos de entrega e as formas de envio.</span>
              <span className="calculate-shipping-details-item">Calcular o prazo de entrega</span>
            </div>
          </p>
          <p>
              <BtnSubmit submit={'Comprar'}/>
              <BtnSubmit onClick={(e) => handleAddCart(e, { id:detailsItemBd.id, img: detailsItemBd.thumbnail, title: detailsItemBd.title,  original_price: detailsItemBd.original_price, price: detailsItemBd.price })} submit={'Adicionar ao Carrinho'}/>
          </p>
        </div>
      </div>
    </div>
  );
}
