/* import React from 'react'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Button,  } from '@chakra-ui/react'
import ItemCount from './ItemCount'


const Item = ({ key, titulo, descripcion, precio }) => {
  return (
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    >
    <Stack>
        <CardBody>
            <Heading size='md'>{titulo}</Heading>

            <Text py='2'>
                {descripcion}
            </Text>
            <Text color='red.600' fontSize='2xl'>
                ${precio}
            </Text>
        </CardBody>

        <CardFooter>
            <Button variant='solid' colorScheme='red'>
                <ItemCount/>
            </Button>
        </CardFooter>
    </Stack>
    </Card>
  )
}

export default Item */