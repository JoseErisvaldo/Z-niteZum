import { useEffect, useState } from 'react'
import api from '../../Services'
import './style.css'

export default function CompoEmphasis () {
  const [itens, setItens] = useState([])
  async function loadingItens () {
    const response = await api.get('sites/MLB/search?q=Iphone')
    console.log(response.data.results)
    const slice = response.data.results.slice(0,3)
    setItens(slice)
  }
  useEffect(() => {
    loadingItens ()
  },[])
  return(
    <div className="container-emphasis-home">
      <h1>Ofertas do dia</h1>
      {itens.map((item) =>(
        <div className='card-emphasis-home' key={item.id}>
          <img src={item.thumbnail} />
         </div>
      ))}
      
    </div>
  )
}