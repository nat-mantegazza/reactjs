import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


const Item = (key, titulo, descripcion, precio) => {
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
            {description}
        </Text>
        <Text color='red.600' fontSize='2xl'>
            ${precio}
        </Text>
        </CardBody>

        <CardFooter>
        <Button variant='solid' colorScheme='red'>
            Comprar
        </Button>
        </CardFooter>
    </Stack>
    </Card>
  )
}

export default Item