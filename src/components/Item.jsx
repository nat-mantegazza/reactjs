import React from 'react'
import { Card, Heading, Stack, Text, CardBody, Divider, CardFooter, Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Item = ({ titulo, descripcion, precio }) => {
  return (
    <Card maxW='sm'>
        <CardBody>
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{titulo}</Heading>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
                <Button> 
                  <Link to={'/item/itemId'}>
                  Ver detalle 
                  </Link>
                </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
  )
}

export default Item