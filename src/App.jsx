import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'




const App = () => {
  return (
    <BrowserRouter> 
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />}/>
        <Route exact path='/cart' element={<Cart />}/>
        <Route exact path="/producto/:id" element={<ItemDetailContainer />} />
        <Route exact path="/categoria/:categoriaId" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


