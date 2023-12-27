import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {

  const { categoriaId } = useParams()
  

  const productos = [
    { id: 1, titulo: "Don Malbec", descripcion: "Vino tinto de 750 cc. Bodega Miguel Escorihuela Gascón. Año 2018.", precio: 27999.99, categoria: "Tinto" },
    { id: 2, titulo: "Catena Zapata Malbec Argentino", descripcion: "Vino tinto de 750 cc. Bodega Catena Zapata. Año 2017.", precio: 95499.88, categoria: "Tinto" },
    { id: 3, titulo: "La Linterna Gualtallary Chardonnay", descripcion: "Vino blanco Chardonnay de 750 cc. Bodega La Linterna. Año 2015. ", precio: 52189.91, categoria: "Blanco" },
    { id: 4, titulo: "Pequeñas Producciones Sauvignon Blanc", descripcion: "Vino blanco Sauvignon de 750 cc. Bodega Pequeñas Producciones. Año 2022", precio: 11200.00, categoria: "Blanco" },
    { id: 5, titulo: "Whispering Angel Rosé", descripcion: "Vino rosado de 750 cc. Bodega Caves d'Esclans. Año 2021", precio: 48499.93, categoria: "Rosado" }, 
    { id: 6, titulo: "Finca La Anita Pétalo de Rosa Magnum", descripcion: "Vino rosado de 1500 cc. Bodega Finca La Anita. Año 2021", precio: 44700.00, categoria: "Rosado" }

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

  
  const productosFiltrados = productos.filter ((producto) => producto.categoria == categoriaId )

  return (
    <div>
      {
        categoriaId ? <ItemList productos={productosFiltrados}/> : <ItemList productos = {productos} />
      }
    </div>
  )
}


export default ItemListContainer
