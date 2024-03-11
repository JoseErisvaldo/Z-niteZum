import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Header from "./Components/Header"
import DetailesItem from "./Pages/DetalilsItem"

export default function RoutesApp () {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/detalhesitem/:id" element={<DetailesItem/>} />
      </Routes>
    </BrowserRouter>
  )
}