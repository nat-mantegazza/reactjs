import React from 'react'
import { Center } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  
  const productos = [
    {id: 1, titulo: 'Producto 1', descripcion: 'descripcion del producto 1', precio: 1000},
    {id: 2, titulo: 'Producto 2', descripcion: 'descripcion del producto 2', precio: 1000},
    {id: 3, titulo: 'Producto 3', descripcion: 'descripcion del producto 3', precio: 1000},
    {id: 4, titulo: 'Producto 4', descripcion: 'descripcion del producto 4', precio: 1000},
    {id: 5, titulo: 'Producto 5', descripcion: 'descripcion del producto 5', precio: 1000} 
  ]
}

export default ItemListContainer

/*
import React from 'react'
import { Center } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <Center p='10'>
        {greeting}
    </Center>
  )
}

export default ItemListContainer
*/