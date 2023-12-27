import React from 'react'
import ItemList from './ItemList'



const ItemListContainer = () => {

  const productos = [
    { id: 1, titulo: "titulo A", descripcion: "descripcion A", precio: 1000 },
    { id: 2, titulo: "titulo B", descripcion: "descripcion B", precio: 1000 },
    { id: 3, titulo: "titulo C", descripcion: "descripcion C", precio: 1000 },
    { id: 4, titulo: "titulo D", descripcion: "descripcion D", precio: 1000 },
    { id: 5, titulo: "titulo E", descripcion: "descripcion E", precio: 1000 }

  ]

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    }else {
      reject("No se obtuvieron productos")
    }
  })

  mostrarProductos
    .then((resultado) => {
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}


export default ItemListContainer
