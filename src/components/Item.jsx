import React from 'react'
import { Card, Heading, Stack, CardBody, Divider, CardFooter, Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ titulo, descripcion, precio, categoria, id }) => {
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
                <Link to={`/producto/${id}`}>
                  Ver Detalle
                </Link>
              </Button>     
            </ButtonGroup>
        </CardFooter>
    </Card>
  )
}

export default Item