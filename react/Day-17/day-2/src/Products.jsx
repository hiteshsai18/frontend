import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate()
  const { mobiles, version } = useParams()

  return (
    <div>
      <h2>Product</h2>
      <h1>{mobiles}, {version}</h1>
      <button onClick={() => navigate('/')}>Back to main</button>
    </div>
  )
}

export default Products