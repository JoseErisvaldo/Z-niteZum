import { Link } from 'react-router-dom'
import './style.css'
export default function CompoListProducts ({list }) {
  return(
    <div className='container-list-products'>
      {list.map((products) => (
        <Link to={`/detalhesitem/${products.id}`} className='link-black' key={products.id}>
        <div className='card-list-products' >
          <div>
            <img className='img-list-products' src={products.thumbnail}  alt={products.alt}/>
            <div className='title-list-products'>{products.title}</div>
            <div className='price-list-products'>
              <span className={products.original_price === products.price ? 'original-list-products' : 'original-list-products-line'}>   
              {products.original_price === products.price ? <></> : 'R$'}
              {products.original_price === products.price ? <></> : products.original_price}</span>
              <span className='discount-list-products'> R$ {products.price}<strong> no Pix</strong></span>
            </div>
          </div>
        </div>
        </Link>
       ))}
    </div>
  )
}