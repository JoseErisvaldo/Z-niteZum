import { useState, useEffect } from "react";
import CompoCategory from "../../Components/CompoCategory";
import NavBar from "../../Components/NavBar";
import api from "../../Services";
import { useParams} from "react-router-dom";
export default function Category () {
   const {id} = useParams ()
  const [categoryBd, setCategoryBd] = useState([]) 
    async function loadingCategory () {
    const response = await api.get(`/sites/MLB/search?q=${id}`)
    setCategoryBd(response.data.results)
    console.log(response.data.results)
  }

  useEffect(() => {
    loadingCategory ()
  },[])
  return(
    <div>
      <NavBar/>
      <div>
        <CompoCategory list={categoryBd}/>
      </div>
    </div>
  )
}