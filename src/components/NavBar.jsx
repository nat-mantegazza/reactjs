import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Text, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (
    <div>
        <Flex bg='red.50' alignItems="center">
            <Box p='4' bg='red.600'>
                <Link to={'/'}>
                    <Text fontSize='lg'>
                        <FontAwesomeIcon icon={faWineGlassEmpty} /> WineStore
                    </Text>
                </Link>
            </Box>
            <Spacer />

            <Button colorScheme='red' variant='ghost'>
                <Link to={'/'}>
                    Inicio
                </Link>
            </Button>
            <Spacer />

            <Menu>
                <MenuButton>
                    Vinos
                </MenuButton>
                <MenuList>
                    <MenuItem>Tinto</MenuItem>
                    <MenuItem>Blanco</MenuItem>
                    <MenuItem>Rosado</MenuItem>
                </MenuList>
            </Menu>
            <Spacer />

            <Menu>
                <MenuButton>
                    Accesorios
                </MenuButton>
                <MenuList>
                    <MenuItem>Sacacorchos</MenuItem>
                    <MenuItem>Posavasos</MenuItem>
                    <MenuItem>Decantadores</MenuItem>
                </MenuList>
            </Menu>           
            <Spacer />

            <Box p='4' bg='red.50'>
                <Link to={"cart"}>
                    <CartWidget /> 
                </Link>
                
            </Box>
        </Flex>
    </div>
  )
}

export default NavBar

/*
import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Text, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons'



const NavBar = () => {
  return (
    <div>
        <Flex bg='red.50' alignItems="center">
            <Box p='4' bg='red.600'>
                <Text fontSize='lg'>
                    <FontAwesomeIcon icon={faWineGlassEmpty} /> WineStore
                </Text>
            </Box>
            <Spacer />

            <Button colorScheme='red' variant='ghost'>
                Inicio
            </Button>
            <Spacer />

            <Menu>
                <MenuButton>
                    Vinos
                </MenuButton>
                <MenuList>
                    <MenuItem>Tinto</MenuItem>
                    <MenuItem>Blanco</MenuItem>
                    <MenuItem>Rosado</MenuItem>
                </MenuList>
            </Menu>
            <Spacer />

            <Menu>
                <MenuButton>
                    Accesorios
                </MenuButton>
                <MenuList>
                    <MenuItem>Sacacorchos</MenuItem>
                    <MenuItem>Posavasos</MenuItem>
                    <MenuItem>Decantadores</MenuItem>
                </MenuList>
            </Menu>           
            <Spacer />

            <Box p='4' bg='red.50'>
                <CartWidget /> 
            </Box>
        </Flex>
    </div>
  )
}

export default NavBar
*/