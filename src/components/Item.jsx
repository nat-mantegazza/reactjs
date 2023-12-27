import React from 'react'
import { Card, Heading, Stack, Text, CardBody, Divider, CardFooter, Button, ButtonGroup } from '@chakra-ui/react'


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
                <Button> Ver detalle </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
  )
}

export default Item