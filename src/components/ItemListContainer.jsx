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