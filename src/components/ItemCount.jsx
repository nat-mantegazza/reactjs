import { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const ItemCount = () => {
    const [contador, setContador] = useState(0)
    
    const sumar = () => {
        if (contador < 10) {
            setContador (contador+1)
        }
    }

    const restar = () => {
        if (contador > 0) {
            setContador (contador-1)
        }
    }
    
    return (
    <div>
        <Stack direction='row' spacing={4} align='center'>
            <Button colorScheme='red' variant='solid' onClick={sumar}>
                +
            </Button>
            <Button colorScheme='teal' variant='outline'>
                Comprar{contador}
            </Button>
            <Button colorScheme='red' variant='solid' onClick={restar}>
                -
            </Button>
        </Stack>

    </div>
  )
}

export default ItemCount