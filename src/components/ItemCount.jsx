/*import { useState } from 'react'
import { Button, Stack,  } from '@chakra-ui/react'

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

export default ItemCount */

/*import React from "react";
import { Button } from '@chakra-ui/react'

const ItemCount = () => {
    return(
        <div>
            <Button colorScheme='red' variant='solid' size='xs'>
                +
            </Button>
            <Button>
                Agregar al carrito
            </Button>
            <Button colorScheme='red' variant='solid' size='xs'>
                -
            </Button>
        </div>
    )
}*/

/*
import { useState } from 'react'
import { Button, Stack,  } from '@chakra-ui/react'

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

export default ItemCount */

import { useState } from "react"
import { Button } from '@chakra-ui/react'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const sumar = () => {
        if (contador < 10) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    return(
        <div>
            <Button colorScheme='red' variant='solid' size='xs' onClick={sumar}>
                +
            </Button>
            <Button>
                Agregar al carrito {contador}
            </Button>
            <Button colorScheme='red' variant='solid' size='xs' onClick={restar}>
                -
            </Button>
        </div>
    )
}
export default ItemCount