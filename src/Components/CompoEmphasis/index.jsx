import { useEffect, useState } from 'react'
import api from '../../Services'
import './style.css'

export default function CompoEmphasis () {
  const [itens, setItens] = useState([])
  async function loadingItens () {
    const response = await api.get('sites/MLB/search?q=Iphone')
    const slice = response.data.results.slice(0,3)
    setItens(slice)
  }
  useEffect(() => {
    loadingItens ()
  },[])
  return(
    <div className="container-emphasis-home">
      <h1 className='card-emphasis-title'>OFERTAS <br></br>DO DIA!!</h1>
      {itens.map((item) =>(
        <div className='card-emphasis-home' key={item.id}>
          <img src={item.thumbnail} />
          <div>{item.title}</div>
          <div className='container-emphasis-price'>
            
            <div className='card-emphasis-price'>R$ {item.original_price}</div>
            <div className='card-emphasis-discount'>R$ {item.price}</div>
          </div>
         </div>
      ))}
      
    </div>
  )
}