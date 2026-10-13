import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'

function App() {
  const api = "https://fakestoreapi.com/products"
  const [productData,setProductData]= useState([])
  const getdata= async (link)=>{
    const req = await fetch(link)
    const data = await req.json()
  setProductData(data)
    
  }
  useEffect(()=>{
    getdata(api)
  }, [])
  
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home productData={productData} />} />
  <Route path='/detail/:id'  element={<Detail productData={productData} />} />
</Routes>
<Footer/>
</BrowserRouter>
    </>
  )
}

export default App