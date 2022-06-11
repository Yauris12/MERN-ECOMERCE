import React from 'react'
import data from '../data.js'
import { Link } from 'react-router-dom'
const HomeScreen = () => {
  return (
    <div>
      <h1>Featured products</h1>
      <div className='products'>
        {data.products.map((product) => (
          <div key={product.slug} className='product'>
            <Link to={`product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className='product-info'>
              <Link to={`product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                {' '}
                <strong>$</strong>
                {product.price}
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeScreen
