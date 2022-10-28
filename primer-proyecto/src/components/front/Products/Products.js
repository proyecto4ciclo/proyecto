import React from 'react'
import data from '../../back/Data.js/Data'
import "./Products.css"
//import React ,{Products} from './Products/Products'
const  productos=require(data)

function Products(productos){
  return (
    <div className='produts'>
      {productos.map((productos) => (
        <><div className="card">
          <div>
            <img className='produts-image'
              src={productos.urlImagen}
              alt={productos.nombre} />
          </div>
        </div>
          <h3 className="product.nombre">{productos.nombre}</h3></>

      ))}
    </div>
  )
}

export default Products