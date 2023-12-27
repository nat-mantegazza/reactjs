import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {
    return (
        <div>
            {
                productos.map((producto)=>{
                    return(
                        <Item 
                            key={producto.id}
                            titulo={producto.titulo}
                            descripcion={producto.descripcion}
                            precio={producto.precio}
                            categoria={producto.categoria}
                            id={producto.id}
                        
                        />
                    )
                }
                )
            }
        </div>
    )
}

export default ItemList;

/*import React from 'react'
import Item from './Item'


const ItemList = ({ productos }) => {
  return (
    <div>
        {
            productos.map((p)=>{
                return(
                    <Item 
                        key={p.id}
                        titulo={p.titulo}
                        descripcion={p.descripcion}
                        precio={p.precio}
                        id={p.id}

                    />

                )
            }
            )
        }
    </div>
  )
}

export default ItemList

*/