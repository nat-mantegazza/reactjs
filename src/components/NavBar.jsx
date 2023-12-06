import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
  return (
    <div>
        <Flex>
        <Box p='4' bg='red.400'>
            <FontAwesomeIcon icon={faWineGlassEmpty} />
            
            WineStore
        </Box>
        <Spacer />

        <Box p='4' bg='green.400'>
            <CartWidget />
        </Box>
        </Flex>
        
        

    </div>
  )
}

export default NavBar