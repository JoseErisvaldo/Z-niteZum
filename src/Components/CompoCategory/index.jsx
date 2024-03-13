import BtnReturn from '../Btns/BtnReturn'
import './style.css'
import { Link } from "react-router-dom"

export default function CompoCategory ({list}) {

  return(
    <div className="container-list-category">
      <BtnReturn/>
      <div className='dados-list-category' >
        <div className='filter-list-category'>
          {/* Filtro */}
        </div>
        <div className='container-card-list-category'>
          {list.map((item) => (
            <Link to={`/detalhesitem/${item.id}`} className='link-black'  key={item.id} >
              <div className='card-list-category'>
                <img src={item.thumbnail} alt='foto' />
                <p className='title-card-list-category'><strong>{item.title}</strong></p>
                <p className='price-card-list-category'>{item.original_price && ('R$')} {item.original_price}</p>
                <p className='discount-card-list-category'>R$ {item.price}</p>
              </div>
            </Link>
          ))}
          
        </div>
      </div>
    </div>
  )
}