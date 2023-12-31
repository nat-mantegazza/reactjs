
import React from 'react'
import { Card, Heading, Stack, Text, CardBody, Divider, CardFooter, Button, ButtonGroup } from '@chakra-ui/react'
import ItemCount from './ItemCount'



const ItemDetail = ({ producto }) => { 

    return (
        <Card maxW='sm'>
            <CardBody>
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{producto.titulo}</Heading>
                <Text>
                    {producto.descripcion}
                </Text>
                <Text color='red.600' fontSize='2xl'>
                    ${producto.precio}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <ItemCount />
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}



export default ItemDetail