import { useEffect, useState } from "react";
import CompoListProducts from "../../Components/CompoListProducts";
import NavBar from "../../Components/NavBar";
import api from "../../Services";
import './style.css'
import { Link } from "react-router-dom";
import LoadingListProducts from "../../Components/CompoListProducts/LoadingListProducts";
import CompoEmphasis from "../../Components/CompoEmphasis";

export default function Home () {
  const [tvBd, setTvBd] = useState([])
  const [queryTvBd, setQueryTvBd] = useState([])
  const [loading, setLoading] = useState(true) 

  const [queryAndroidBd,setQueryAndroidBd] = useState([])
  const [androidBd, setAndroidBd] = useState([])

  const [perfumeBd, setPerfumeBd] = useState([])
  const [queryPerfumeBd, setQueryPerfumeBd]  = useState([])

  async function listCategoryTv () {
    const res = await api.get('/sites/MLB/search?q=TV')
    setQueryTvBd(res.data.query)
     const slicedTvResults = res.data.results.slice(0, 8);
    setTvBd(slicedTvResults)
    setLoading(false)
  }

   async function listCategoryAndroid () {
    const res = await api.get('/sites/MLB/search?q=Celulares')

    setQueryAndroidBd(res.data.query)
     const slicedTvResults = res.data.results.slice(0, 8);
    setAndroidBd(slicedTvResults)
    setLoading(false)
  }

  async function listCategoryPerfume () {
    const res = await api.get('/sites/MLB/search?q=Perfumes')
    setQueryPerfumeBd(res.data.query)
     const slicedTvResults = res.data.results.slice(0, 8);
    setPerfumeBd(slicedTvResults)
    setLoading(false)
  }


  useEffect(() => {
    listCategoryTv ()
    listCategoryAndroid()
    listCategoryPerfume ()
  },[])

  if(loading) {
    return <div><LoadingListProducts/></div>
  }
  
  return(
    <div className="home">
      <NavBar/>
      <CompoEmphasis/>
      <div>
        <div className="home-container-title">
           <h2 className="home-title-category">{queryTvBd}</h2>
           <Link to={`categoria/${queryTvBd}`} className="link-black">
            <div className="home-view-more">Ver mais</div>
          </Link>
        </div>
        <CompoListProducts list={tvBd}/>
      </div>
      <div>
        <div className="home-container-title">
           <h2 className="home-title-category">{queryAndroidBd}</h2>
           <Link to={`categoria/${queryAndroidBd}`} className="link-black">
            <div className="home-view-more">Ver mais</div>
          </Link>
        </div>

        <CompoListProducts list={androidBd}/>
      </div>

      <div>
        <div className="home-container-title">
           <h2 className="home-title-category">{queryPerfumeBd}</h2>
           <Link to={`categoria/${queryPerfumeBd}`} className="link-black">
            <div className="home-view-more">Ver mais</div>
          </Link>
        </div>

        <CompoListProducts list={perfumeBd}/>
      </div>
      
    </div>
  )
}